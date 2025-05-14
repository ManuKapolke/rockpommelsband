import { useRef, useState, useEffect } from "react";
import { Person } from "../../utils/persons";

type PersonImageProps = {
    person: Person;
    isActive: boolean;
    onClick: () => void;
    zIndex: number;
    onHoverChange?: (isHovered: boolean) => void;
};

export const PersonImage = ({
    person,
    onClick,
    isActive,
    zIndex,
    onHoverChange
}: PersonImageProps) => {
    const { bwSrc, colorSrc } = person;
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const imgRef = useRef<HTMLImageElement | null>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [imgLoaded, setImgLoaded] = useState(false);

    // Use a proper image load effect
    useEffect(() => {
        const img = new Image();
        img.src = bwSrc;
        img.onload = () => {
            const canvas = canvasRef.current;
            if (canvas) {
                // Set canvas dimensions to match natural image size
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext("2d");
                if (ctx) {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(img, 0, 0);
                    setImgLoaded(true);
                }
            }
        };
    }, [bwSrc]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!imgLoaded || !imgRef.current || !canvasRef.current) return;

        // Get the scaling factor between displayed image and original image size
        const displayedWidth = imgRef.current.clientWidth;
        const displayedHeight = imgRef.current.clientHeight;
        const originalWidth = canvasRef.current.width;
        const originalHeight = canvasRef.current.height;

        const scaleX = originalWidth / displayedWidth;
        const scaleY = originalHeight / displayedHeight;

        // Get coordinates relative to the image
        const rect = imgRef.current.getBoundingClientRect();
        const x = Math.floor((e.clientX - rect.left) * scaleX);
        const y = Math.floor((e.clientY - rect.top) * scaleY);

        const ctx = canvasRef.current.getContext("2d");
        if (!ctx) return;

        // Check if coordinates are within bounds
        if (x >= 0 && y >= 0 && x < originalWidth && y < originalHeight) {
            try {
                const pixel = ctx.getImageData(x, y, 1, 1).data;
                const alpha = pixel[3];
                const newHoverState = alpha > 10;

                if (newHoverState !== isHovered) {
                    setIsHovered(newHoverState);
                    if (onHoverChange) {
                        onHoverChange(newHoverState);
                    }
                }
            } catch (err) {
                console.error("Error checking pixel data:", err);
                setIsHovered(false);
                if (onHoverChange) {
                    onHoverChange(false);
                }
            }
        } else {
            setIsHovered(false);
            if (onHoverChange) {
                onHoverChange(false);
            }
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (onHoverChange) {
            onHoverChange(false);
        }
    };

    const handleClick = () => {
        if (isHovered) {
            onClick();
        }
    };

    return (
        <div
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                pointerEvents: "auto",
                width: "100%",
                height: "100%",
                zIndex: zIndex,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            {/* Sichtbares Bild */}
            <img
                ref={imgRef}
                src={isActive || isHovered ? colorSrc : bwSrc}
                alt=""
                style={{
                    pointerEvents: "none",
                    width: "100%",
                    height: "100%",
                    objectFit: "contain"
                }}
                onLoad={() => {
                    if (imgRef.current && canvasRef.current) {
                        console.log(`Image ${person.name} dimensions:`, {
                            displayed: {
                                width: imgRef.current.clientWidth,
                                height: imgRef.current.clientHeight
                            },
                            canvas: {
                                width: canvasRef.current.width,
                                height: canvasRef.current.height
                            }
                        });
                    }
                }}
            />

            {/* Unsichtbares Canvas */}
            <canvas
                ref={canvasRef}
                style={{
                    display: "none",
                }}
            />
        </div>
    );
};

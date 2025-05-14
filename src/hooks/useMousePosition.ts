import React from 'react';

export const useMousePosition = () => {
    const [mousePosition, setMousePosition] = React.useState({
        x: 0,
        y: 0,
    });

    React.useEffect(() => {
        const handleMouseMove = (event: MouseEvent): void => {
            setMousePosition({
                x: event.clientX,
                y: event.clientY,
            });
        }

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return mousePosition;
}
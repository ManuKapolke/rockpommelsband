import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "react-feather";
import styles from "./Lightbox.module.less";
import { GalleryImage, getSrcSet } from "../../pages/Gallery/galleryData";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";

interface LightboxProps {
  images: GalleryImage[];
  initialIndex: number;
  onClose: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  images,
  initialIndex,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(initialIndex);
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const [mouseX, setMouseX] = React.useState<number | null>(null);
  const touchStartX = React.useRef<number | null>(null);
  const touchEndX = React.useRef<number | null>(null);
  const preloadedImages = React.useRef<Set<number>>(new Set());

  React.useEffect(() => {
    setCurrentIndex(initialIndex);
    setImageLoaded(false);
  }, [initialIndex]);

  // Preload adjacent images for smoother navigation
  React.useEffect(() => {
    const preloadImage = (index: number) => {
      if (
        preloadedImages.current.has(index) ||
        index < 0 ||
        index >= images.length
      ) {
        return;
      }
      const img = new Image();
      img.src = images[index].fullSrc;
      preloadedImages.current.add(index);
    };

    // Preload current, previous, and next images
    preloadImage(currentIndex);
    preloadImage(currentIndex > 0 ? currentIndex - 1 : images.length - 1);
    preloadImage(currentIndex < images.length - 1 ? currentIndex + 1 : 0);
  }, [currentIndex, images]);

  const goToPrevious = React.useCallback(() => {
    setImageLoaded(false);
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  }, [images.length]);

  const goToNext = React.useCallback(() => {
    setImageLoaded(false);
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  }, [images.length]);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [goToPrevious, goToNext, onClose]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;

    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    setMouseX(e.clientX);
  };

  const handleMouseLeave = () => {
    setMouseX(null);
  };

  const isTouch = touchStartX.current !== null || touchEndX.current !== null;
  const getScreenThird = (): "left" | "middle" | "right" | null => {
    if (mouseX === null || isTouch) return null;
    const screenWidth = window.innerWidth;
    const third = screenWidth / 3;

    if (mouseX < third) return "left";
    if (mouseX > third * 2) return "right";
    return "middle";
  };

  const screenThird = getScreenThird();
  const showPrevButton = screenThird === "left";
  const showNextButton = screenThird === "right";

  const currentImage = images[currentIndex];

  if (!currentImage) return null;

  return (
    <AnimatePresence>
      <motion.div
        className={styles.overlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClose}
      >
        <div
          className={styles.lightboxContent}
          onClick={(e) => e.stopPropagation()}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {!imageLoaded && <LoadingSpinner hasPositionAbsolute />}

          {images.length > 1 && (
            <>
              <motion.button
                className={styles.navButton}
                style={{
                  left: "16px",
                  pointerEvents: showPrevButton ? "auto" : "none",
                }}
                onClick={goToPrevious}
                aria-label="Previous image"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: showPrevButton ? 1 : 0,
                  scale: showPrevButton ? 1 : 0.8,
                }}
                transition={{ duration: 0.2 }}
              >
                <ChevronLeft size={32} />
              </motion.button>
              <motion.button
                className={styles.navButton}
                style={{
                  right: "16px",
                  pointerEvents: showNextButton ? "auto" : "none",
                }}
                onClick={goToNext}
                aria-label="Next image"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: showNextButton ? 1 : 0,
                  scale: showNextButton ? 1 : 0.8,
                }}
                transition={{ duration: 0.2 }}
              >
                <ChevronRight size={32} />
              </motion.button>
            </>
          )}

          <div className={styles.imageContainer}>
            <motion.img
              src={currentImage.fullSrc}
              srcSet={getSrcSet(currentImage.src, 1920)}
              alt={`Foto von ${currentImage.photographer}`}
              className={styles.lightboxImage}
              onLoad={() => setImageLoaded(true)}
              initial={{ opacity: 0 }}
              animate={{
                opacity: imageLoaded ? 1 : 0,
              }}
              transition={{ duration: 0.2 }}
              decoding="async"
            />
          </div>

          <div className={styles.imageInfo}>
            <div className={styles.photographerInfo}>
              Foto: {currentImage.photographer}
            </div>
            {images.length > 1 && (
              <div className={styles.imageCounter}>
                {currentIndex + 1} / {images.length}
              </div>
            )}
          </div>

          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

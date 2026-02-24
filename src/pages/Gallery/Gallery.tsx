import React from "react";
import { Card } from "../../components/Card/Card";
import {
  getGalleryEvents,
  GalleryImage,
  getSrcSet,
  GalleryEvent,
} from "./galleryData";
import { Lightbox } from "../../components/Lightbox/Lightbox";
import styles from "./Gallery.module.less";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { ChevronDown } from "react-feather";
import { DividerRule } from "../../components/DividerRule/DividerRule";
import { useTranslation } from "../../i18n/useTranslation";

export const Gallery = () => {
  const { t } = useTranslation();
  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [lightboxImages, setLightboxImages] = React.useState<GalleryImage[]>(
    []
  );
  const [lightboxIndex, setLightboxIndex] = React.useState(0);

  const events = getGalleryEvents();

  const openLightbox = (eventImages: GalleryImage[], startIndex: number) => {
    setLightboxImages(eventImages);
    setLightboxIndex(startIndex);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <div>
      <Card>
        {events.length === 0 ? (
          <div className={styles.emptyState}>
            <p>{t({ id: "gallery.empty" })}</p>
          </div>
        ) : (
          <Accordion
            type="multiple"
            defaultValue={[events[0].formattedHeadline]}
          >
            {events.map((event, index) => (
              <AccordionItem
                value={event.formattedHeadline}
                key={event.formattedHeadline}
                className={styles.eventSection}
              >
                <AccordionHeader asChild className={styles.eventHeadline}>
                  <AccordionTrigger className={styles.AccordionTrigger}>
                    <h2>{event.formattedHeadline}</h2>
                    <ChevronDown
                      size={20}
                      strokeWidth={4}
                      className={styles.AccordionChevron}
                      aria-hidden
                    />
                  </AccordionTrigger>
                </AccordionHeader>

                <AccordionContent
                  className={`${styles.imageGrid} ${styles.AccordionContent}`}
                >
                  {event.images.map((image, imageIndex) => (
                    <ProgressiveImage
                      key={image.src}
                      event={event}
                      image={image}
                      onClick={() => openLightbox(event.images, imageIndex)}
                    />
                  ))}

                  {index !== events.length - 1 && <DividerRule />}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </Card>

      {lightboxOpen && (
        <Lightbox
          images={lightboxImages}
          initialIndex={lightboxIndex}
          onClose={closeLightbox}
        />
      )}
    </div>
  );
};

type ProgressiveImageProps = {
  event: GalleryEvent;
  image: GalleryImage;
  onClick: () => void;
};

const ProgressiveImage = ({ event, image, onClick }: ProgressiveImageProps) => {
  const { t } = useTranslation();
  const [isLoaded, setIsLoaded] = React.useState(false);
  const imgRef = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    if (imgRef.current?.complete) {
      setIsLoaded(true);
    }
  }, []);

  return (
    <div
      className={`${styles.imageWrapper} ${isLoaded ? "" : `${styles.loading}`}`}
      onClick={onClick}
    >
      <img
        ref={imgRef}
        src={image.thumbnailSrc}
        srcSet={getSrcSet(image.src, 300)}
        alt={`${event.venue} - ${image.photographer}`}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        className={styles.galleryImage}
      />
      <div className={styles.photographerBadge}>
        {t({ id: "gallery.photoBy" }, { name: image.photographer })}
      </div>
    </div>
  );
};

// Dynamic image discovery using Vite's import.meta.glob
// Folder structure: YYYY-MM-DD_Venue/PhotographerName/image.jpg

export interface GalleryImage {
  src: string; // Original source path (for backward compatibility)
  thumbnailSrc: string; // Optimized thumbnail (300px width)
  fullSrc: string; // Optimized full-size (1920px width)
  photographer: string;
}

export interface GalleryEvent {
  date: Date;
  venue: string;
  formattedDate: string;
  formattedHeadline: string;
  images: GalleryImage[];
}

// Helper function to generate optimized image URL with query parameters
export const getOptimizedImageUrl = (
  baseSrc: string,
  width: number,
  format: string = "webp",
  quality: number = 85
): string => {
  return `${baseSrc}?w=${width}&format=${format}&quality=${quality}`;
};

// Helper function to generate srcset for responsive images
export const getSrcSet = (
  baseSrc: string,
  baseWidth: number,
  format: string = "webp",
  quality: number = 85
): string => {
  const src1x = getOptimizedImageUrl(baseSrc, baseWidth, format, quality);
  const src2x = getOptimizedImageUrl(baseSrc, baseWidth * 2, format, quality);
  return `${src1x} 1x, ${src2x} 2x`;
};

// Get all images from the gallery folder
const galleryImages = import.meta.glob<string>(
  "../../assets/img/gallery/**/*.{jpg,jpeg,png,JPG,JPEG,PNG}",
  {
    eager: true,
    import: "default",
  }
);

// Parse the folder structure and organize images
export const getGalleryEvents = (): GalleryEvent[] => {
  const eventMap = new Map<
    string,
    {
      images: GalleryImage[];
      date: Date;
      venue: string;
      formattedDate: string;
      formattedHeadline: string;
    }
  >();

  // Process each image path
  Object.entries(galleryImages).forEach(([path, imageSrc]) => {
    // Extract path parts: ../../assets/img/gallery/YYYY-MM-DD_Venue/PhotographerName/image.jpg
    const pathParts = path.split("/");
    const galleryIndex = pathParts.findIndex((part) => part === "gallery");

    if (galleryIndex === -1 || pathParts.length < galleryIndex + 3) {
      return; // Skip if path structure is unexpected
    }

    const dateVenueFolder = pathParts[galleryIndex + 1]; // e.g., "2025-10-03_Hagen"
    const photographerFolder = pathParts[galleryIndex + 2]; // e.g., "Rudi_Brand"
    const photographerName = photographerFolder.replace(/_/g, " "); // e.g., "Rudi Brand"

    // Parse date and venue from folder name (YYYY-MM-DD_Venue)
    const [datePart, ...venueParts] = dateVenueFolder.split("_");
    const venue = venueParts.join("_"); // Handle venues with underscores

    // Parse date (YYYY-MM-DD)
    const [year, month, day] = datePart.split("-").map(Number);
    const date = new Date(year, month - 1, day);

    // Format date as DD.MM.YYYY
    const formattedDate = `${day.toString().padStart(2, "0")}.${month
      .toString()
      .padStart(2, "0")}.${year}`;
    const formattedHeadline = `${venue} (${formattedDate})`;

    const eventKey = dateVenueFolder;

    if (!eventMap.has(eventKey)) {
      eventMap.set(eventKey, {
        images: [],
        date,
        venue,
        formattedDate,
        formattedHeadline,
      });
    }

    const baseSrc = imageSrc as string;
    eventMap.get(eventKey)!.images.push({
      src: baseSrc, // Keep original for backward compatibility
      thumbnailSrc: getOptimizedImageUrl(baseSrc, 300), // Thumbnail for gallery grid
      fullSrc: getOptimizedImageUrl(baseSrc, 1920), // Full-size for lightbox
      photographer: photographerName,
    });
  });

  // Convert map to array and sort by date (latest first)
  const events: GalleryEvent[] = Array.from(eventMap.values()).map(
    ({ images, date, venue, formattedDate, formattedHeadline }) => ({
      date,
      venue,
      formattedDate,
      formattedHeadline,
      images,
    })
  );

  // Sort by date (latest first)
  events.sort((a, b) => b.date.getTime() - a.date.getTime());

  return events;
};

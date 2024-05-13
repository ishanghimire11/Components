import { cn } from "src/utils/cn";
import React, { useState } from "react";

interface ImageLoaderProps {
  imageUrl: string;
  fallbackColor: string;
  alt?: string;
  className?: string;
}

const ImageLoader = ({
  imageUrl,
  fallbackColor,
  alt,
  className,
}: ImageLoaderProps) => {
  const [isImageLoaded, setIsImageLoading] = useState(false);

  return (
    <div
      className="w-full h-full"
      style={{ backgroundColor: isImageLoaded ? "transparent" : fallbackColor }}
    >
      <img
        className={`w-full h-full ${isImageLoaded ? "block" : "hidden"} ${cn(
          "w-full h-full",
          className
        )}`}
        src={imageUrl}
        onLoad={() => setIsImageLoading(true)}
        alt={alt}
      />
    </div>
  );
};

export default ImageLoader;

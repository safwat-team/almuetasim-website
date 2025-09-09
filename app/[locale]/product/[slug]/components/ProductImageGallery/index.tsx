"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageData {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  thumbnailWidth: number;
  thumbnailHeight: number;
}

interface ProductImageGalleryProps {
  images: ImageData[];
  discountPercentage?: number;
}

const ProductImageGallery = ({
  images,
  discountPercentage,
}: ProductImageGalleryProps) => {
  const [activeImage, setActiveImage] = useState(images[0]);

  const handleImageChange = (image: ImageData) => {
    setActiveImage(image);
  };

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-lg bg-base-200 aspect-square">
        <Image
          id="main-image"
          src={activeImage.src}
          alt={activeImage.alt}
          width={activeImage.width}
          height={activeImage.height}
          className="w-full h-full object-cover image-zoom cursor-zoom-in"
        />
        {discountPercentage && discountPercentage > 0 && (
          <div className="badge badge-secondary absolute top-4 left-4">
            {discountPercentage}% OFF
          </div>
        )}
      </div>

      {/* Thumbnail Images */}
      <div className="grid grid-cols-4 gap-2">
        {images.map((image) => (
          <div
            key={image.id}
            className={`thumbnail aspect-square rounded-lg overflow-hidden cursor-pointer ${
              activeImage.id === image.id ? "active" : ""
            }`}
            onClick={() => handleImageChange(image)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.thumbnailWidth}
              height={image.thumbnailHeight}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;

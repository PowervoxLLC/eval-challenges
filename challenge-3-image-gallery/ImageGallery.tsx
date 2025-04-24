import React from "react";

interface Image {
  id: number;
  url: string;
  title: string;
  width: number;
  height: number;
}

interface ImageGalleryProps {
  images: Image[];
  isLoading?: boolean;
  onLoadMore?: () => void;
  hasMore?: boolean;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  isLoading = false,
  onLoadMore,
  hasMore = false,
}) => {
  // TODO: Implement the image gallery component
  return null;
};

export default ImageGallery;

import React from 'react';
import { Image } from '../';
import styles from './index.module.css';

interface ImageSliderProps {
  images: string[];
  currentImageIndex: number;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  currentImageIndex,
}) => (
  <div className={styles.imageWrapper}>
    {images.map((image, index) => (
      <Image
        key={index}
        src={image}
        alt={`image-${index}`}
        isActive={index === currentImageIndex}
      />
    ))}
  </div>
);

export default ImageSlider;

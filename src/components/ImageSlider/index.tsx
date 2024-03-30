import React from 'react';
import { Image } from '../';
import { ALT } from '../../utils';
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
        key={`${image}-${index}`}
        src={image}
        alt={`${ALT}-${index}`}
        isActive={index === currentImageIndex}
      />
    ))}
  </div>
);

export default ImageSlider;

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
    <Image
      src={images[currentImageIndex]}
      alt={`${ALT}-${currentImageIndex}`}
      isActive={true}
    />
  </div>
);

export default ImageSlider;

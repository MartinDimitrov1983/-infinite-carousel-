import React from 'react';
import { ImageSlider } from '../';
import { useCarousel } from '../../hooks/useCarousel';
import styles from './index.module.css';

interface CarouselProps {
  images: string[];
  height: number;
}

const Carousel: React.FC<CarouselProps> = ({ images, height }) => {
  const { currentIndex, containerRef } = useCarousel(images);

  return (
    <div
      ref={containerRef}
      className={styles.carouselContainer}
      style={{ height: `${height}px` }}
    >
      <ImageSlider images={images} currentImageIndex={currentIndex} />
    </div>
  );
};

export default Carousel;

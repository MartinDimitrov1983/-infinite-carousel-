import React, { useRef, useEffect, useState } from 'react';
import styles from './index.module.css';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<number | null>(null);

  console.log(currentImageIndex);
  console.log(images.length - 1);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      const container = containerRef.current;
      if (container) {
        if (scrollTimeoutRef.current !== null) {
          window.clearTimeout(scrollTimeoutRef.current);
        }

        const { deltaY, deltaX } = event;
        console.log(deltaY, deltaX);
        scrollTimeoutRef.current = window.setTimeout(() => {
          // right === down
          // left === up
          setCurrentImageIndex((prevIndex) => {
            let newIndex = prevIndex + (deltaY || deltaX > 0 ? 1 : -1);

            // Handling bounds
            newIndex = (newIndex + images.length) % images.length;
            return newIndex;
          });
        }, 100);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleScroll);
      container.style.overflow = 'hidden';
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleScroll);
      }
    };
  }, [images.length]);

  return (
    <div ref={containerRef} className={styles.carouselContainer}>
      <div className={styles.imageWrapper}>
        {images.map((image, index) => (
          <img
            className={styles.img}
            key={index}
            src={image}
            alt={`mage-${index}`}
            style={{
              display: `${index === currentImageIndex ? 'inline-block' : 'none'}`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

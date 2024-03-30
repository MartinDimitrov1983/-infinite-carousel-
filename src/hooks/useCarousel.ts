import { useEffect, useRef, useState } from 'react';
import { TIMEOUT } from '../utils';

export interface CarouselHookResult {
  currentIndex: number;
  containerRef: React.RefObject<HTMLDivElement>;
}

export const useCarousel = (images: string[]): CarouselHookResult => {
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
        console.log('Y', deltaY, 'X', deltaX);
        scrollTimeoutRef.current = window.setTimeout(() => {
          setCurrentImageIndex((prevIndex) => {
            let newIndex = prevIndex;

            if (deltaY > 0) {
              // Scrolled down
              newIndex = prevIndex < images.length - 1 ? prevIndex + 1 : 0;
            } else if (deltaY < 0) {
              // Scrolled up
              newIndex = prevIndex > 0 ? prevIndex - 1 : images.length - 1;
            } else if (deltaX < 0) {
              // Scrolled left
              newIndex = prevIndex > 0 ? prevIndex - 1 : images.length - 1;
            } else if (deltaX > 0) {
              // Scrolled right
              newIndex = prevIndex < images.length - 1 ? prevIndex + 1 : 0;
            }
            return newIndex;
          });
        }, TIMEOUT);
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

  return { currentIndex: currentImageIndex, containerRef };
};

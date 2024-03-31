import { useEffect, useRef, useState } from 'react';
import { TIMEOUT, OPACITY, RESTORE_OPACITY } from '../utils';

export interface CarouselHookResult {
  currentIndex: number;
  containerRef: React.RefObject<HTMLDivElement>;
}

export const useCarousel = (images: string[]): CarouselHookResult => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<number | null>(null);

  console.log(currentImageIndex)

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      const container = containerRef.current;
      if (container) {
        if (scrollTimeoutRef.current !== null) {
          window.clearTimeout(scrollTimeoutRef.current);
        }

        const { deltaY, deltaX } = event;
        console.log("X",deltaX , "Y",deltaY)
        console.log(new Date())
        container.style.opacity = OPACITY;
        scrollTimeoutRef.current = window.setTimeout(() => {
          setCurrentImageIndex((prevIndex) => {
            let newIndex = prevIndex;

            if (deltaY > 0 || deltaX > 0) {
              // Scrolled down or left
              newIndex = prevIndex === images.length - 1 ? 0 : prevIndex + 1;
            } else if (deltaY < 0 || deltaX < 0) {
              // Scrolled up or right
              newIndex = prevIndex === 0 ? images.length - 1 : prevIndex - 1;
            }

            return newIndex;
          });
          container.style.opacity = RESTORE_OPACITY;
        }, 200);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleScroll);
    //   container.style.overflow = 'hidden';
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleScroll);
      }
    };
  }, [images.length]);

  return { currentIndex: currentImageIndex, containerRef };
};

import React from 'react';
import styles from './index.module.css';

interface ImageProps {
  src: string;
  alt: string;
  isActive: boolean;
}
const Image: React.FC<ImageProps> = ({ src, alt, isActive }) => (
  <img
    className={styles.img}
    src={src}
    alt={alt}
    style={{
      display: `${isActive ? 'inline-block' : 'none'}`,
    }}
  />
);

export default Image;

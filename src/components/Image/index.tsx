import React from 'react';
import { NONE, INLINE_BLOCK } from '../../utils';
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
      display: `${isActive ? INLINE_BLOCK : NONE}`,
    }}
  />
);

export default Image;

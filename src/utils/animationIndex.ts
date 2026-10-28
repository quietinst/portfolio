import type { CSSProperties } from 'react';

// The navbar links use animation indexes 1–3, so lists on the pages
// start their staggered animation from index 5.
export const LIST_FIRST_INDEX = 5;

// Sets the `--i` CSS variable that the styles multiply by the animation delay.
export const animationIndex = (index: number): CSSProperties =>
  ({ '--i': index }) as CSSProperties;

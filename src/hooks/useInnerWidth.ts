import { useEffect, useState } from 'react';

import { getScrollBarWidth } from 'utils/window-dimensions/get-scroll-bar-width';

export const useInnerWidth = (): { innerWidth: number; innerWidthWithoutScrollBar: number } => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [scrollbarWidth, setScrollBarWidth] = useState(getScrollBarWidth());

  useEffect(() => {
    const updateInnerWidth = () => {
      setInnerWidth(window.innerWidth);
      setScrollBarWidth(window.innerWidth - document.documentElement.clientWidth);
    };
    window.addEventListener('resize', updateInnerWidth);

    return () => window.removeEventListener('resize', updateInnerWidth);
  });

  return { innerWidth, innerWidthWithoutScrollBar: innerWidth - scrollbarWidth };
};

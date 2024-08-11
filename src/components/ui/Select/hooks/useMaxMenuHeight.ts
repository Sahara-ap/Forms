import React, { useEffect, useState } from 'react';
import { useInnerWidth } from 'hooks/useInnerWidth';

import { BOTTOM_DROPDOWN_OFFSET_PIXELS } from 'components/ui/Select/constants/bottom-dropdown-offset-pixels.const';

export const useMaxMenuHeight = (
  isOpened: boolean,
  selectButtonRef: React.RefObject<HTMLButtonElement>,
): number | null => {
  const [maxMenuHeight, setMaxMenuHeight] = useState<number | null>(null);

  const { innerWidth } = useInnerWidth();

  useEffect(() => {
    if (isOpened && selectButtonRef.current) {
      const selectButtonRect = selectButtonRef.current.getBoundingClientRect();
      const pageHeight = document.body.offsetHeight;
      const availableSpace = pageHeight - selectButtonRect.bottom - window.scrollY;
      setMaxMenuHeight(availableSpace - BOTTOM_DROPDOWN_OFFSET_PIXELS);
    }
  }, [isOpened, selectButtonRef, innerWidth]);

  return maxMenuHeight;
};

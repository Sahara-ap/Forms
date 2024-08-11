import { useEffect, useLayoutEffect } from 'react';

export const useCloseByClick = ({isSelectClick,  isShown, cb }: {isSelectClick: boolean; isShown: boolean; cb: () => void}): void => {
  useEffect(() => {
    const closeByClick = () => {
      if(!isSelectClick) {
        cb();
      }
    };

    if (isShown && !isSelectClick) {
      document.addEventListener('click', closeByClick);
    }

    return () => {
      document.removeEventListener('click', closeByClick);
    }
  }, [cb, isShown, isSelectClick]);
};

import { RefObject, useCallback, useEffect } from 'react';

export const useOuterClick = ({
  excludedElements,
  isLockedOnScreen,
  cb,
}: {
  excludedElements: RefObject<HTMLElement>[];
  isLockedOnScreen?: boolean;
  cb: () => void;
}): void => {
  const clickOutOfElements = useCallback(
    (event: Event) =>
      excludedElements.every(
        (element) => element.current && !element.current?.contains(event.target as Node),
      ),
    [excludedElements],
  );

  const handleOutsideClick = useCallback(
    (event: Event) => {
      if (clickOutOfElements(event) && !isLockedOnScreen) {
        cb();
      }
    },
    [clickOutOfElements, isLockedOnScreen, cb],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick, true);
    return () => document.removeEventListener('mousedown', handleOutsideClick, true);
  }, [handleOutsideClick]);
};

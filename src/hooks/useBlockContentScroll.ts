import { useEffect } from 'react';

export const useBlockContentScroll = (): void => {
  useEffect(() => {
    document.body.classList.add('no-scroll');
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);
};

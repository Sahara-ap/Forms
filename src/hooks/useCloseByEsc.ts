import { useEffect } from 'react';

export const useCloseByEsc = ({
	isShown,
	isLockedOnScreen = false,
	cb,
}: {
	isShown: boolean;
	cb: () => void;
	isLockedOnScreen?: boolean;
}): void => {
	useEffect(() => {
		const closePopupByEsc = (evt: KeyboardEvent) => {
			if (evt.key === 'Escape' && !isLockedOnScreen) {
				cb();
			}
		};

		if (isShown && !isLockedOnScreen) {
			document.addEventListener('keydown', closePopupByEsc);
		}

		return () => {
			document.removeEventListener('keydown', closePopupByEsc);
		};
	}, [cb, isShown, isLockedOnScreen]);
};

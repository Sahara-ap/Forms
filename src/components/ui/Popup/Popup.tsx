import React, { RefObject, useRef } from 'react';
import ReactFocusLock from 'react-focus-lock';
import { ReactComponent as CloseIcon } from 'assets/close-large.svg';
import { useBlockContentScroll } from 'hooks/useBlockContentScroll';
import { useCloseByEsc } from 'hooks/useCloseByEsc';
import { useOuterClick } from 'hooks/useOuterClick';

import { IPopupProps } from './types/popup-props.interface';

import * as S from './Popup.styled';

export const Popup: React.FC<IPopupProps> = ({
  title,
  content,
  variant = 'default',
  handlePopupClose,
}) => {
  const popupRef = useRef(null);

  const excludedFromOuterClickElements: RefObject<HTMLElement>[] = [popupRef];

  useOuterClick({
    excludedElements: excludedFromOuterClickElements,
    cb: handlePopupClose,
  });
  useCloseByEsc({ isShown: true, cb: handlePopupClose });
  useBlockContentScroll();

  return (
    <S.Overlay>
      <ReactFocusLock returnFocus={true} autoFocus={false}>
        <S.PopupWrapper ref={popupRef} $isWidePopup={variant === 'wide'}>
          <S.HeaderWrapper>
            <S.Title>{title}</S.Title>
            <S.CloseButton variant="borderless" icon={<CloseIcon />} onClick={handlePopupClose} />
          </S.HeaderWrapper>
          <S.ContentWrapper>{content}</S.ContentWrapper>
        </S.PopupWrapper>
      </ReactFocusLock>
    </S.Overlay>
  );
};

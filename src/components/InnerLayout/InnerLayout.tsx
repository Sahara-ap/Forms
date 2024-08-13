import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useInnerWidth } from 'hooks/useInnerWidth';

import { FinishApplyContent } from 'components/FinishApplyContent';
import { InnerHeader } from './components/InnerHeader';
import { MainMenu } from './components/MainMenu';
import { Popup } from 'components/ui/Popup';

import { closePopupAction } from 'store/modals-reducer/modals.reducer';
import { selectIsFinishApplyOpened } from 'store/modals-reducer/modals.selectors';
import { BreakPoint } from 'styles/style-variables/breakpoint';

import * as S from './InnerLayout.styled';

export const InnerLayout: React.FC = () => {
  const dispatch = useDispatch();

  const isFinishApplyOpened = useSelector(selectIsFinishApplyOpened);
  const [isMainMenuOpened, setIsMainMenuOpened] = useState(false);

  const closeMainMenu = () => {
    setIsMainMenuOpened(false);
  };

  const handleMainMenuOpen = (event: React.MouseEvent): void => {
    event.stopPropagation()
    setIsMainMenuOpened(true);
  };

  const handleMainMenuClosed = (event: React.MouseEvent): void => {
    event.stopPropagation()
    setIsMainMenuOpened(false);
  };

  const handleFinishPopupClose = () => {
    dispatch(closePopupAction())
  }

  const { innerWidth, innerWidthWithoutScrollBar } = useInnerWidth();
  const sideSpace =
    (innerWidthWithoutScrollBar - parseInt(BreakPoint.DesktopTop)) / 2;
  return (
    <S.Wrapper>
      <S.HeaderWrapper $sideSpace={sideSpace >= 0 ? sideSpace : 0}>
        <InnerHeader
          isMainMenuOpened={isMainMenuOpened}
          handleMainMenuOpen={handleMainMenuOpen}
          handleMainMenuClosed={handleMainMenuClosed}
        />
      </S.HeaderWrapper>
      {(innerWidth >= parseInt(BreakPoint.DesktopLow) || isMainMenuOpened) && (
        <S.MenuWrapper $sideSpace={sideSpace >= 0 ? sideSpace : 0}>
          <MainMenu closeMainMenu={closeMainMenu} isOpen={isMainMenuOpened}/>
        </S.MenuWrapper>
      )}

      <S.ContentWrapper $sideSpace={sideSpace >= 0 ? sideSpace : 0}>
        <Outlet />
      </S.ContentWrapper>

      {isFinishApplyOpened && (
        <Popup
          title="Поздравляем"
          content={<FinishApplyContent />}
          handlePopupClose={handleFinishPopupClose}

        />
      )}

    </S.Wrapper>
  );
};

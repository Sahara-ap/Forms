import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useInnerWidth } from 'hooks/useInnerWidth';

import { InnerHeader } from './components/InnerHeader';

import { BreakPoint } from 'styles/style-variables/breakpoint';

import { MainMenu } from './components/MainMenu';
import * as S from './InnerLayout.styled';

export const InnerLayout: React.FC = () => {
  const [isMainMenuOpened, setIsMainMenuOpened] = useState(false);

  const handleMainMenuOpen = (): void => {
    setIsMainMenuOpened(true);
  };

  const handleMainMenuClosed = (): void => {
    setIsMainMenuOpened(false);
  };

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
          <MainMenu />
        </S.MenuWrapper>
      )}

      <S.ContentWrapper $sideSpace={sideSpace >= 0 ? sideSpace : 0}>
        <Outlet />
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

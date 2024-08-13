import React from 'react';
import { ReactComponent as MenuBurger } from 'assets/menu-icons/menu-burger.svg';
import { ReactComponent as MenuCross } from 'assets/menu-icons/menu-cross.svg';

import * as S from './InnerHeader.styled';

export interface IInnerHeaderProps {
  isMainMenuOpened: boolean;
  handleMainMenuOpen: (event: React.MouseEvent) => void;
  handleMainMenuClosed: (event: React.MouseEvent) => void;
}

export const InnerHeader: React.FC<IInnerHeaderProps> = ({
  handleMainMenuOpen,
  isMainMenuOpened,
  handleMainMenuClosed
}) => {
  return (
    <>
      <S.MenuButton
        variant="borderless"
        icon={isMainMenuOpened ? <MenuCross /> : <MenuBurger />}
        onClick={isMainMenuOpened
          ? (event: React.MouseEvent) => handleMainMenuClosed(event)
          : (event:React.MouseEvent) => handleMainMenuOpen(event)}
      />
    </>
  );
};

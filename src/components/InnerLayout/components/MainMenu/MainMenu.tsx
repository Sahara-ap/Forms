import React from 'react';

import { MenuLogo } from 'components/InnerLayout/components/MenuLogo';
import { Navigation } from 'components/InnerLayout/components/Navigation';


interface IMainMenuProps {
  closeMainMenu: () => void;
  isOpen: boolean;
}
export const MainMenu: React.FC<IMainMenuProps> = (props) => {
  return (
    <>
      <MenuLogo />
      <Navigation {...props}/>
    </>
  );
};

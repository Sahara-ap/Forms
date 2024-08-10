import React from 'react';

import { MenuLogo } from 'components/InnerLayout/components/MenuLogo';
import { Navigation } from 'components/InnerLayout/components/Navigation';

export const MainMenu: React.FC = () => {
  return (
    <>
      <MenuLogo />
      <Navigation />
    </>
  );
};

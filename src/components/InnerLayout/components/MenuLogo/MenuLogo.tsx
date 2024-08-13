import React from 'react';
import imageWiamLogo from 'assets/logo-icons/wiam-logo.png'

import * as S from './MenuLogo.styled';

export const MenuLogo: React.FC = () => {
  return (
    <S.LogoWrapper>
      <source srcSet={imageWiamLogo} type="image/png" />
      <img width={120} height={100} src={imageWiamLogo}/>
    </S.LogoWrapper>
  );
};

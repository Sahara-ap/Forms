import React from 'react';
import { useLocation } from 'react-router-dom';

import { navItems } from './constants/nav-items';

import * as S from './Navigation.styled';
import { NavigationItem } from '../NavigationItem';

export const Navigation: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <S.NavWrapper as="nav">
      <S.NavList>
        {navItems.map(({ linkTo, text }) => (
          <NavigationItem
            key={linkTo}
            linkTo={linkTo}
            text={text}
            isCurrent={pathname === linkTo}
          />
        ))}
      </S.NavList>
    </S.NavWrapper>
  );
};

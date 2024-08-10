import React from 'react';

import * as S from './NavigationItem.styled';

interface INavigationItemProps {
  linkTo: string;
  text: string;
  isCurrent: boolean;
  onClick?: () => void;
}

export const NavigationItem: React.FC<INavigationItemProps> = ({
  linkTo,
  text,
  isCurrent,
  onClick,
}) => {
  return (
    <S.NavListItem>
      <S.NavListLink linkTo={linkTo} text={text} $isCurrent={isCurrent} handleClick={onClick} />
    </S.NavListItem>
  );
};

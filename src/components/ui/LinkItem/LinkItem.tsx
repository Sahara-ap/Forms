import React, { ReactElement } from 'react';

import * as S from './LinkItem.styled';

interface ILinkItemProps {
  linkTo: string;
  text: string;
  title?: string;
  isOuterLink?: boolean;
  handleClick?: () => void;
  icon?: ReactElement;
  isReversed?: boolean;
  className?: string;
}

export const LinkItem: React.FC<ILinkItemProps> = ({
  linkTo,
  text,
  title,
  isOuterLink = false,
  handleClick,
  icon,
  isReversed = false,
  className,
}) => {
  return (
    <>
      {isOuterLink ? (
        <S.OuterLink
          className={className}
          href={linkTo}
          title={title}
          target="_blank"
          rel="noreferrer"
          onClick={handleClick}
          $hasIcon={!!icon}
        >
          {!isReversed && icon && icon}
          <span>{text}</span>
          {isReversed && icon && icon}
        </S.OuterLink>
      ) : (
        <S.InnerLink
          className={className}
          to={linkTo}
          title={title}
          onClick={handleClick}
          $hasIcon={!!icon}
        >
          {!isReversed && icon && icon}
          <span>{text}</span>
          {isReversed && icon && icon}
        </S.InnerLink>
      )}
    </>
  );
};

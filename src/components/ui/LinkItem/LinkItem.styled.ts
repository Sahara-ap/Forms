import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { FontFamily } from 'styles/style-variables/font-family';
import { TransitionTime } from 'styles/style-variables/transition-time';

const commonLinkStyles = css`
  text-decoration: none;
  color: #0e46c0;
  transition: color ${TransitionTime.Hover};
  outline: none;

  & span {
    font-family: ${FontFamily.Montserrat};
    font-weight: 500;
  }

  &:hover,
  &:focus {
    color: #6a96f6;
  }

  &:active {
    color: #03349e;
  }
`;

const linkStylesWithIcon = css`
  display: inline-flex;
  align-items: center;
  gap: 4px;

  & svg {
    flex-shrink: 0;

    & path {
      fill: #0e46c0;
      transition: all ${TransitionTime.Hover};
    }
  }

  &:hover,
  &:focus {

    & svg path {
      fill: #6a96f6;
    }
  }

  &:active {

    & svg path {
      fill: #03349e;
    }
  }
`;

export const OuterLink = styled.a<{ $hasIcon: boolean }>`
  ${commonLinkStyles};
  ${({ $hasIcon }) => $hasIcon && linkStylesWithIcon};
`;

export const InnerLink = styled(Link)<{ $hasIcon: boolean }>`
  ${commonLinkStyles};
  ${({ $hasIcon }) => $hasIcon && linkStylesWithIcon};
`;

import styled from 'styled-components';
import { BreakPoint } from 'styles/style-variables/breakpoint';

import { Button } from 'components/ui/Button';

export const MenuButton = styled(Button)`
  width: 24px;

  & svg path {
    fill: #fff;
  }

  &:hover,
  &:focus,
  &:active {

    svg path {
      fill: #fff;
    }
  }

  @media (min-width: ${BreakPoint.DesktopLow}) {
    display: none;
  }
`;



import styled from 'styled-components';
import { BreakPoint } from 'styles/style-variables/breakpoint';
import { MenuWidth } from 'styles/style-variables/menu-width';

export const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: ${BreakPoint.LaptopTop}) {
    align-items: flex-start;
    width: ${MenuWidth.Laptop};
    padding-top: 16px;
    padding-left: 8px;
  }

  @media (max-width: ${BreakPoint.MobileTop}) {
    width: 100%;
    padding-top: 0;
    padding-left: 0;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

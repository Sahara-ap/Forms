import styled from 'styled-components';

import { BreakPoint } from 'styles/style-variables/breakpoint';
import { HeaderHeight } from 'styles/style-variables/header-height';
import { MenuWidth } from 'styles/style-variables/menu-width';
import { ZIndex } from 'styles/style-variables/z-index';

export const Wrapper = styled.div`
  display: flex;
  flex: 1 0;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: ${BreakPoint.DesktopTop};
  height: 100%;
`;

export const HeaderWrapper = styled.header<{ $sideSpace: number }>`
  position: fixed;
  top: 0;
  right: 0;
  left: ${({ $sideSpace }) => `${parseInt(MenuWidth.Desktop) + $sideSpace}px`};
  z-index: ${ZIndex.Header};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
  min-height: ${HeaderHeight.Desktop};
  padding: 16px 24px;
  background-color: #24b2d1;

  @media (max-width: ${BreakPoint.LaptopTop}) {
    left: 0;
    justify-content: flex-start;
  }

  @media (max-width: ${BreakPoint.MobileTop}) {
    left: 0;
    justify-content: flex-start;
    min-height: ${HeaderHeight.Mobile};
    padding: 12px 16px;
  }
`;

export const MenuWrapper = styled.div<{ $sideSpace: number }>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: ${({ $sideSpace }) => `${$sideSpace}px`};
  display: flex;
  flex-direction: column;
  width: ${MenuWidth.Desktop};
  background-color: #fff;
  box-shadow: 0 4px 12px 0 rgb(3 52 158 / 10%);

  @media (max-width: ${BreakPoint.LaptopTop}) {
    position: fixed;
    inset: ${HeaderHeight.Desktop} 0 0 0;
    z-index: ${ZIndex.Menu};
    width: 100%;
    margin-top: 0;
    background-color: #fff;
  }

  @media (max-width: ${BreakPoint.MobileTop}) {
    position: fixed;
    top: ${HeaderHeight.Mobile};
  }
`;

export const ContentWrapper = styled.main<{ $sideSpace: number }>`
  display: flex;
  flex: 1 0;
  flex-direction: column;
  width: calc(100% - ${MenuWidth.Desktop});
  margin-top: ${HeaderHeight.Desktop};
  margin-right: ${({ $sideSpace }) => `${$sideSpace}px`};
  margin-left: ${({ $sideSpace }) => `${parseInt(MenuWidth.Desktop) + $sideSpace}px`};
  background-color: #f4f4f7;

  @media (max-width: ${BreakPoint.LaptopTop}) {
    width: 100%;
    margin-left: 0;
  }

  @media (max-width: ${BreakPoint.MobileTop}) {
    margin-top: ${HeaderHeight.Mobile};
  }
`;

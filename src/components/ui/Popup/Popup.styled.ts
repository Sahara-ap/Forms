import styled from 'styled-components';
import { popupContentMobileReveal } from 'styles/keyframes/popup-content-mobile-reveal';
import { popupReveal } from 'styles/keyframes/popup-reveal';
import { animationDuration } from 'styles/style-variables/animation-duration';
import { BreakPoint } from 'styles/style-variables/breakpoint';
import { FontFamily } from 'styles/style-variables/font-family';
import { ZIndex } from 'styles/style-variables/z-index';

import { Button } from 'components/ui/Button';
import { POPUP_VERTICAL_OFFSET_PIXELS } from './constants/popup-vertical-offset-pixels.const';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${ZIndex.Popup};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(39 39 39 / 60%);
  animation: ${popupReveal} ${animationDuration.PopupReveal} ease;
`;

export const PopupWrapper = styled.div<{ $isWidePopup: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ $isWidePopup }) => ($isWidePopup ? '100%' : '380px')};
  max-width: 800px;
  max-height: calc(100vh - ${POPUP_VERTICAL_OFFSET_PIXELS * 2}px);
  border-radius: 16px;
  background-color: #fff;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 25%);
  overflow: hidden;

  @media (max-width: ${BreakPoint.MobileTop}) {
    position: fixed;
    top: ${POPUP_VERTICAL_OFFSET_PIXELS}px;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    max-height: calc(100vh - ${POPUP_VERTICAL_OFFSET_PIXELS}px);
    border-radius: 16px 16px 0 0;
    animation: ${popupContentMobileReveal} ${animationDuration.PopupReveal} ease;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 24px;
  background-color: #fff;

  @media (max-width: ${BreakPoint.MobileTop}) {
    padding: 16px 16px 24px;
  }
`;

export const Title = styled.h2`
  flex-grow: 1;
  font-family: ${FontFamily.Montserrat};
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  color: #272727;
`;

export const CloseButton = styled(Button)`
  & svg path {
    fill: #272727;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
`;

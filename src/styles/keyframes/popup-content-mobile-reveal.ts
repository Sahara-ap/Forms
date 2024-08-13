import { POPUP_ANIMATION_OFFSET_PIXELS } from 'components/ui/Popup/constants/popup-animation-offset-pixels.const';
import { POPUP_VERTICAL_OFFSET_PIXELS } from 'components/ui/Popup/constants/popup-vertical-offset-pixels.const';
import { keyframes } from 'styled-components';

export const popupContentMobileReveal = keyframes`
  0% {
    top: ${POPUP_VERTICAL_OFFSET_PIXELS + POPUP_ANIMATION_OFFSET_PIXELS}px;
    bottom: -${POPUP_ANIMATION_OFFSET_PIXELS}px;
  }

  100% {
    top: ${POPUP_VERTICAL_OFFSET_PIXELS}px;
    bottom: 0;
  }
`;

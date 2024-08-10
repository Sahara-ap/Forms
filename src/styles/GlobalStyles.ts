import { createGlobalStyle } from 'styled-components';

import { BreakPoint } from './style-variables/breakpoint';
import { FontFamily } from './style-variables/font-family';

export const GlobalStyles = createGlobalStyle`
    body {
        position: relative;
        max-width: 100%;
        margin: 0;
        background-color: #F4F4F7;
        font-family: ${FontFamily.Montserrat};
    }

    body * {
        box-sizing: border-box;
    }

    #root {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: calc(100vh + 1px);
    }

    .Toastify__toast-container, .Toastify__toast, .Toastify__toast-body {
        margin-bottom: 0;
        padding: 0;
        border: none;
        border-radius: 8px;
        background: transparent;
    }

    .Toastify__toast-container {
        width: max-content;
    }

    .Toastify__toast {
        min-height: auto;
        margin-bottom: 2px;
        box-shadow: 0 0 4px 0 rgb(0 0 0 / 50%),
        0 8px 16px 0 rgb(0 0 0 / 50%);
    }

    .Toastify__close-button, .Toastify__toast-icon {
        display: none;
    }
    
    .no-scroll {
      overflow: hidden;
    }

    @media only screen and (width <= ${BreakPoint.MobileTop}) {

        .Toastify__toast-container--bottom-center {
            bottom: 16px;
            left: 50%;
            transform: translateX(-50%);
        }
    }
`;

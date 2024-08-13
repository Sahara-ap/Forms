import styled from 'styled-components';
import { BreakPoint } from 'styles/style-variables/breakpoint';
import { FontFamily } from 'styles/style-variables/font-family';

const Toast = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  max-width: 800px;
  padding: 8px 8px 8px 12px;
  border-radius: 8px;
  font-family: ${FontFamily.Montserrat};
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #fff;

  @media (max-width: ${BreakPoint.TabletTop}) {
    max-width: calc(100vw - 20px);
  }
`;

export const Success = styled(Toast)`
  background-color: #3069e5;
`;

export const Error = styled(Toast)`
  background-color: #ec494f;
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;

  & svg {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
  }
`;

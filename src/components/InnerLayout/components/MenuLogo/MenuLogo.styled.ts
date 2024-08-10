import styled from 'styled-components';
import { BreakPoint } from 'styles/style-variables/breakpoint';

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  width: 100%;
  padding: 24px;

  @media (max-width: ${BreakPoint.LaptopTop}) {
    display: none;
  }
`;

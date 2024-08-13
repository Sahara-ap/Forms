import styled from 'styled-components';
import { BreakPoint } from 'styles/style-variables/breakpoint';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 24px 24px;
  font-size: 16px;
  line-height: 24px;

  @media (max-width: ${BreakPoint.MobileTop}) {
    padding-right: 16px;
    padding-left: 16px;
  }
`;

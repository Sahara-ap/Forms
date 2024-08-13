import { SText } from 'components/styled/SText';
import styled, { css } from 'styled-components';
import { shake } from 'styles/keyframes/shake';
import { animationDuration } from 'styles/style-variables/animation-duration';
import { BreakPoint } from 'styles/style-variables/breakpoint';
import { FontFamily } from 'styles/style-variables/font-family';

export const Form = styled.form<{ $isFailed: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 25px;

  ${({ $isFailed }) => {
    if ($isFailed) {
      return css`
        animation: ${shake} ${animationDuration.Shake} ease;
      `;
    }
  }}

  @media (max-width: ${BreakPoint.MobileTop}) {
    align-items: stretch;
    padding: 16px;
  }
`;

export const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;


  @media (max-width: ${BreakPoint.MobileTop}) {
    gap: 16px;
  }
`;

export const FormSectionTitle = styled.h2`

  font-family: ${FontFamily.Montserrat};
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  color: #272727;

  @media (max-width: ${BreakPoint.MobileTop}) {
    font-size: 14px;
    line-height: 18px;
  }
`;

export const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;

  @media (max-width: ${BreakPoint.MobileTop}) {
    min-height: 76px;
    grid-template-columns: 1fr;
  }
`;

export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-height: 90px;
`;

export const LabelText = styled(SText)`
  padding-bottom: 4px;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #646464;

  @media (max-width: ${BreakPoint.MobileTop}) {
    font-size: 10px;
    line-height: 14px;
    letter-spacing: 0.3px;
  }
`;

export const SexLabel = styled(InputLabel)`
  max-width: 348px;
`;

export const ErrorText = styled(SText)`
  font-size: 10px;
  line-height: 14px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  color: #ec494f;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  width: 100%;
  padding: 20px 10px;
`;

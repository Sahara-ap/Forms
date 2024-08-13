import styled from 'styled-components';
import { BreakPoint } from 'styles/style-variables/breakpoint';
import { FontFamily } from 'styles/style-variables/font-family';
import { TransitionTime } from 'styles/style-variables/transition-time';

const BasicButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: auto;
  height: auto;
  padding: 7px 12px;
  border: none;
  border-radius: 16px;
  background-color: transparent;
  font-family: ${FontFamily.Montserrat};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  text-align: center;
  transition: all ${TransitionTime.Hover};
  cursor: pointer;
  outline: none;

  & svg {
    flex-grow: 0;
    flex-shrink: 0;

    path {
      transition: all ${TransitionTime.Hover};
    }
  }

  @media (max-width: ${BreakPoint.TabletTop}) {
    user-select: none;
  }

  &:hover,
  &:focus {
    transition: all ${TransitionTime.Hover};

    & svg path {
      transition: all ${TransitionTime.Hover};
    }
  }

  &:active {
    transition: all ${TransitionTime.Active};

    & svg path {
      transition: all ${TransitionTime.Active};
    }
  }

  &:disabled {
    transition: all ${TransitionTime.Disabled};
    cursor: auto;

    & svg path {
      transition: all ${TransitionTime.Disabled};
    }
  }
`;

export const BorderlessButton = styled(BasicButton)`
  gap: 2px;
  padding: 0;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #0e46c0;

  & svg path {
    fill: #0e46c0;
  }

  &:hover,
  &:focus {
    color: #6a96f6;

    & svg path {
      fill: #6a96f6;
    }
  }

  &:active {
    color: #03349e;

    & svg path {
      fill: #03349e;
    }
  }

  &:disabled {
    color: #a1a1a1;

    & svg path {
      fill: #a1a1a1;
    }
  }
`;


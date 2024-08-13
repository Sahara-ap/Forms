import { ValidationErrorMessage } from 'utils/validators/constants/validation-error.message';

import { TValidatorResponse } from './types/validator-response.types';

export const hasExactLength =
  (length: number) =>
  (value: string): TValidatorResponse =>
    value?.length === length ? undefined : ValidationErrorMessage.ShouldHaveExactLength(length -2 );

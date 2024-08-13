import { ValidationErrorMessage } from './constants/validation-error.message';
import { TValidatorResponse } from './types/validator-response.types';

export const isRequired = (value: string): TValidatorResponse =>
  value ? undefined : ValidationErrorMessage.FieldRequired();

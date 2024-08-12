import { ValidationErrorMessage } from 'utils/validators/constants/validation-error.message';

import { isRequired } from './is-required';

describe('isRequired', () => {
  it('should return undefined when the value is not empty', () => {
    const value = 'Hello';

    const result = isRequired(value);

    expect(result).toBeUndefined();
  });

  it('should return an error message when the value is empty string', () => {
    const value = '';

    const result = isRequired(value);

    expect(result).toEqual(ValidationErrorMessage.FieldRequired());
  });
});

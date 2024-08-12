import { TEL_LENGTH } from 'utils/validators/constants/validation.constants';
import { ValidationErrorMessage } from 'utils/validators/constants/validation-error.message';

import { hasExactLength } from './has-exact-length';

describe('hasExactLength', () => {
  it('should return undefined when the string length is equal to the length', () => {
    const validator = hasExactLength(TEL_LENGTH);
    const value = '0123 567 911';

    const result = validator(value);

    expect(result).toBeUndefined();
  });

  it('should return an error message when the string length is less than the length', () => {
    const validator = hasExactLength(TEL_LENGTH);
    const value = '0123 567 9';

    const result = validator(value);

    expect(result).toEqual(ValidationErrorMessage.ShouldHaveExactLength(TEL_LENGTH - 2));
  });

  it('should return an error message when the string length is bigger than the length', () => {
    const validator = hasExactLength(TEL_LENGTH);
    const value = '0123 567 911 1111111';

    const result = validator(value);

    expect(result).toEqual(ValidationErrorMessage.ShouldHaveExactLength(TEL_LENGTH - 2));
  });
});

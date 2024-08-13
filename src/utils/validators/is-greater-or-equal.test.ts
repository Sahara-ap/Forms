import { ValidationErrorMessage } from './constants/validation-error.message';
import { isGreaterOrEqual } from './is-greater-or-equal';

describe('isGreaterOrEqual validator', () => {
	it('returns undefined when value is a string representation of a number equal to minValue', () => {
		const validator = isGreaterOrEqual(5);
		const result = validator('5');
		expect(result).toBeUndefined();
	});

	it('returns undefined when value is a string representation of a number greater than minValue', () => {
		const validator = isGreaterOrEqual(5);
		const result = validator('6');
		expect(result).toBeUndefined();
	});

	it('returns space "  " when adds optional argument {show_message: false} and validation failed (user value less than minValue)', () => {
		const validator = isGreaterOrEqual(5, {show_message: false});
		const result = validator('4');
		expect(result).toBe(' ');
	});

	it('returns error message when value is a string representation of a number less than minValue', () => {
		const validator = isGreaterOrEqual(5);
		const result = validator('4');
		expect(result).toEqual(ValidationErrorMessage.ValueShouldBeGreaterOrEqual(5));
	});

	it('returns error message when value is a string', () => {
		const validator = isGreaterOrEqual(5);
		const result = validator('abc');
		expect(result).toEqual(ValidationErrorMessage.ValueShouldBeGreaterOrEqual(5));
	});

	it('returns error message when value is an empty string', () => {
		const validator = isGreaterOrEqual(5);
		const result = validator('');
		expect(result).toEqual(ValidationErrorMessage.ValueShouldBeGreaterOrEqual(5));
	});
});

import { ValidationErrorMessage } from './constants/validation-error.message';
import { IMessageRenderingStatus } from './types/validator-message-rendering-status.types';
import { TValidatorResponse } from './types/validator-response.types';



export const isGreaterOrEqual =
	(minValue: number, {show_message}:IMessageRenderingStatus = {show_message: true}) =>
	(value: string): TValidatorResponse => {
		const numberValue = Number(value);
		return numberValue >= minValue
			? undefined
			: show_message ===  true
				? ValidationErrorMessage.ValueShouldBeGreaterOrEqual(minValue) 
				: ' ';
	};

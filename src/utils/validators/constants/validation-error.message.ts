export const ValidationErrorMessage = {
  FieldRequired: (): string => 'This field is required',
  ShouldHaveExactLength: (length: number): string => `The tel number should have ${length} characters`,
};

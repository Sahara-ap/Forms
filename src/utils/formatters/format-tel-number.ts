export const formatTelNumber = (userTelNumber: string): string => {
  let result = '';
  let onlyDigits = userTelNumber.replace(/\D/g, '');

  if (onlyDigits[0] !== '0') {
    onlyDigits = '0' + onlyDigits;
  }

  if (onlyDigits.length >= 1) {
    result += onlyDigits.substring(0, 4)
  }

  if (onlyDigits.length >= 5) {
    result += ' ' + onlyDigits.substring(4, 7)
  }

  if (onlyDigits.length >= 8) {
    result += ' ' + onlyDigits.substring(7, 10)
  }

  if (result === '0') {
    result = '';
}

  return result;
};
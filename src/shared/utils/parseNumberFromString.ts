export const parseNumberFromString = (value: string): number => {
  const parsedValue = parseFloat(value.replace(/,/g, ''));
  return isNaN(parsedValue) ? 0 : parsedValue;
};

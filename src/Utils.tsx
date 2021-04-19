/**
 * Convert a numeric value into string money format
 *
 * @param {number} value The value we would like in money format
 *
 * @return {string}
 */
export const moneyFormat = (value: number) => {
  return '$' + value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

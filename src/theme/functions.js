/**
 * Function to mix the styles provided for the theme.
 * @param keys
 * @param styles
 * @returns {*}
 */
export const mixStyles = (keys = [], styles = {}) => {
  return keys.reduce((result, currentKey) => {
    if (styles[currentKey]) {
      result = {
        ...result,
        ...styles[currentKey],
      };
    }
    return result;
  }, {});
};

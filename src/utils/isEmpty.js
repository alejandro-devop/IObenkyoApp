import _ from 'lodash';
/**
 * This function allows to validate if a value is really empty.
 * @author Jorge Alejandro Quiroz Serna <jakop.box@gmail.com>
 * @param {*} value
 */
export default (value) => {
  const compare = _.trim(value);
  return compare === '' || compare === null || compare === undefined;
};

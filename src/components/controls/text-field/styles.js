export default ({styles: {inputs = {}, typography = {}}, mixStyles}) => ({
  input: {
    ...mixStyles(['inputBase'], inputs),
  },
  inputDisabled: {
    ...mixStyles(['inputDisabled'], inputs),
  },
  inputWrapper: {
    ...mixStyles(['inputWrapper'], inputs),
  },
  label: {
    ...mixStyles(['label'], inputs),
    ...mixStyles(['paragraph', 'bold'], typography),
  },
  labelDisabled: {
    ...mixStyles(['labelDisabled'], inputs),
  },
  root: {},
});

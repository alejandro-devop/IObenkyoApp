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
  labelSecondary: {
    ...mixStyles(['labelSecondary'], inputs),
  },
  labelDisabled: {
    ...mixStyles(['labelDisabled'], inputs),
  },
  inputSecondary: {
    ...mixStyles(['inputSecondary'], inputs),
  },
  root: {},
});

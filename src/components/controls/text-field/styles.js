export default ({styles: {inputs = {}, typography = {}}, mixStyles}) => ({
  addOnWrapper: {
    marginLeft: 10,
  },
  input: {
    flex: 1,
    ...mixStyles(['inputBase'], inputs),
  },
  inputControlWrapper: {
    flexDirection: 'row',
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
  onlyMask: {
    justifyContent: 'center',
  },
  root: {},
  valueText: {
    color: '#000',
  },
});

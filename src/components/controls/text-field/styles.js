export default ({styles: {inputs = {}, typography = {}}, mixStyles}) => ({
  addOnWrapper: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  preOnWrapper: {
    marginRight: 10,
    justifyContent: 'center',
  },
  valueTextCenter: {
    alignItems: 'center',
    textAlign: 'center',
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
  inputCenter: {
    textAlign: 'center',
  },
  inputWrapper: {
    ...mixStyles(['inputWrapper'], inputs),
  },
  label: {
    ...mixStyles(['label'], inputs),
    ...mixStyles(['bold'], typography),
  },
  labelSecondary: {
    ...mixStyles(['labelSecondary'], inputs),
  },
  labelDisabled: {
    ...mixStyles(['labelDisabled'], inputs),
  },
  labelLeft: {
    ...mixStyles(['labelLeft'], inputs),
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

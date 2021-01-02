export default ({styles: {inputs, typography}, mixStyles}) => ({
  label: {
    ...mixStyles(['label'], inputs),
    ...mixStyles(['paragraph', 'bold'], typography),
    marginBottom: 10,
  },
  labelSecondary: {
    ...mixStyles(['labelSecondary'], inputs),
  },
  labelDisabled: {
    ...mixStyles(['labelDisabled'], inputs),
  },
  root: {
    marginBottom: 20,
  },
});

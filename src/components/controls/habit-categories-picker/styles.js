export default ({styles: {inputs, general, typography}, mixStyles}) => ({
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
  actionsWrapper: {
    ...mixStyles(['displayRow', 'justifyCenter', 'mt2'], general),
  },
});

export default ({styles: {inputs = {}, typography = {}}, mixStyles}) => ({
  label: {
    marginRight: 20,
    ...mixStyles(['label'], inputs),
    ...mixStyles(['paragraph', 'bold'], typography),
  },
  labelSecondary: {
    fontWeight: '600',
    ...mixStyles(['labelSecondary'], inputs),
  },
  root: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
});

export default ({palette, styles: {general = {}}, mixStyles}) => ({
  actions: {
    width: 200,
    alignSelf: 'center',
  },
  root: {
    backgroundColor: palette.secondaryTransparent,
    ...mixStyles(['ph1', 'pv2', 'rounded1'], general),
  },
  rootSecondary: {
    backgroundColor: '#FFF',
  },
  row: {
    marginBottom: 10,
  },
});

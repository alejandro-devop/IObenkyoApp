export default ({palette, styles: {general = {}}, mixStyles}) => ({
  actions: {
    width: 200,
    alignSelf: 'center',
  },
  col: {
    flex: 1,
  },
  root: {
    backgroundColor: palette.secondaryTransparent,
    ...mixStyles(['ph1', 'pv2', 'rounded1'], general),
  },
  row: {
    marginBottom: 10,
  },
  rowHorizontal: {
    flexDirection: 'row',
  },
});

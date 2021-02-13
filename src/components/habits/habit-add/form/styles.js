export default ({palette, styles: {general = {}}, mixStyles}) => ({
  actions: {
    ...mixStyles(['mt5'], general),
  },
  content: {
    backgroundColor: palette.secondaryTransparent,
    paddingHorizontal: 10,
    ...mixStyles(['pv2', 'rounded1'], general),
  },
  root: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  row: {
    marginVertical: 10,
  },
  rowHorizontal: {
    flexDirection: 'row',
  },
});

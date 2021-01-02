export default ({styles: {general = {}}, mixStyles}) => ({
  actions: {
    ...mixStyles(['mt5'], general),
  },
  root: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  row: {
    marginVertical: 10,
  },
  rowHorizontal: {
    flexDirection: 'row',
  },
});

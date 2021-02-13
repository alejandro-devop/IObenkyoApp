export default ({palette, styles: {general = {}}, mixStyles}) => ({
  emptySetWrapper: {
    alignItems: 'center',
    backgroundColor: palette.secondaryTransparent,
    ...mixStyles(['pv2', 'rounded1'], general),
  },
  emptyText: {
    marginBottom: 20,
  },
  fabWrapper: {
    position: 'absolute',
    bottom: 0,
    right: -10,
  },
  fab: {
    alignSelf: 'flex-end',
    width: 35,
    height: 35,
  },
  fabIcon: {
    fontSize: 18,
  },
  fab1: {
    position: 'relative',
    marginBottom: 8,
  },
  fab2: {
    position: 'relative',
  },
  root: {
    flex: 1,
    ...mixStyles(['pv2'], general),
  },
});

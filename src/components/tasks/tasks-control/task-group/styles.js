export default ({palette, styles: {general = {}}, mixStyles}) => ({
  actions: {
    marginTop: 10,
    alignItems: 'center',
  },
  container: {
    backgroundColor: palette.secondaryTransparent,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    ...mixStyles(['pv4'], general),
  },
  emptyText: {
    textAlign: 'center',
  },
  root: {
    ...mixStyles(['mb2'], general),
  },
  titleWrapper: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    backgroundColor: palette.secondaryTransparent,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    ...mixStyles(['ph2', 'pv1'], general),
  },
});

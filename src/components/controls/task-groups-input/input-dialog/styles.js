export default ({palette, styles: {general}, mixStyles}) => ({
  actions: {
    marginTop: 20,
  },
  content: {
    paddingBottom: 200,
    ...mixStyles(['pt2'], general),
  },
  container: {
    flex: 1,
  },
  emptyText: {
    textAlign: 'center',
  },
  root: {
    height: '70%',
  },
  titleText: {
    color: palette.primary,
  },
});

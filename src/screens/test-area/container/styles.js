export default ({palette, styles: {general}, mixStyles}) => ({
  root: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: palette.secondary,
    marginVertical: 10,
    ...mixStyles(['rounded1'], general),
  },
  titleWrapper: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FFF',
    paddingBottom: 5,
  },
});

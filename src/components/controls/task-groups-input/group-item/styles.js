export default ({palette, styles: {general}, mixStyles}) => ({
  root: {
    borderBottomWidth: 1,
    borderBottomColor: palette.primaryTransparent,
    borderRadius: 20,
    flexDirection: 'row',
    paddingHorizontal: 20,
    ...mixStyles(['ph4', 'pv2'], general),
  },
  text: {
    color: '#000',
  },
  textItem: {},
  textWrapper: {
    flex: 1,
    marginLeft: 20,
  },
});

export default ({palette = {}, styles: {general = {}}, mixStyles}) => ({
  iconWrapper: {
    alignItems: 'center',
    backgroundColor: palette.secondaryDark,
    justifyContent: 'center',
    width: 45,
    height: 45,
    borderRadius: 100,
  },
  root: {
    backgroundColor: palette.secondaryTransparent,
    borderRadius: 40,
    marginBottom: 8,
    paddingRight: 10,
    width: '100%',
  },
  text: {
    fontSize: 16,
  },
  textCounter: {
    fontSize: 14,
  },
  textWrapper: {
    flex: 1,
    marginLeft: 10,
  },
  typeIcon: {
    fontSize: 20,
    marginHorizontal: 14,
  },
  typeIconKeep: {
    color: palette.success,
  },
  typeIconAvoid: {
    color: palette.danger,
  },
  wrapper: {
    alignItems: 'center',
    ...mixStyles(['displayRow'], general),
  },
});

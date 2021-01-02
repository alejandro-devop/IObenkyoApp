export default ({palette = {}, styles: {typography = {}}, mixStyles}) => ({
  root: {
    backgroundColor: palette.primary,
    borderRadius: 40,
    flexDirection: 'row',
    paddingHorizontal: 30,
    paddingVertical: 14,
  },
  rootDisabled: {
    backgroundColor: palette.grayTransparent,
    borderWidth: 1,
    borderColor: palette.grayLight,
  },
  rootLoading: {
    opacity: 0.6,
  },
  text: {
    color: '#FFF',
    ...mixStyles(['paragraph', 'bold'], typography),
  },
  textLoading: {
    marginRight: 5,
  },
  textDisabled: {
    color: palette.gray,
  },
});

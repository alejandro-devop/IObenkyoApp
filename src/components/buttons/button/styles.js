export default ({palette = {}, styles: {typography = {}}, mixStyles}) => ({
  root: {
    backgroundColor: palette.primary,
    borderRadius: 40,
    paddingHorizontal: 30,
    paddingVertical: 14,
  },
  rootDisabled: {
    backgroundColor: palette.grayTransparent,
    borderWidth: 1,
    borderColor: palette.grayLight,
  },
  text: {
    color: '#FFF',
    ...mixStyles(['paragraph', 'bold'], typography),
  },
  textDisabled: {
    color: palette.gray,
  },
});

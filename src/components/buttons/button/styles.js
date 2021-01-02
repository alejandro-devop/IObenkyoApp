export default ({palette = {}, styles: {typography = {}}, mixStyles}) => ({
  root: {
    backgroundColor: palette.primary,
    borderRadius: 40,
    flexDirection: 'row',
    paddingHorizontal: 30,
    paddingVertical: 14,
    marginBottom: 10,
  },
  rootSecondary: {
    backgroundColor: palette.secondary,
  },
  rootDisabled: {
    backgroundColor: palette.grayTransparent,
    borderWidth: 1,
    borderColor: palette.grayLight,
    opacity: 0.8,
  },
  rootLoading: {
    opacity: 0.6,
  },
  text: {
    color: '#FFF',
    flex: 1,
    textAlign: 'center',
    ...mixStyles(['paragraph', 'bold'], typography),
  },
  textLoading: {
    marginRight: 5,
  },
  textDisabled: {
    color: palette.grayLight,
  },
});

export default ({palette = {}, styles: {general, typography}, mixStyles}) => ({
  root: {
    backgroundColor: palette.primary,
    borderRadius: 40,
    flexDirection: 'row',
    marginBottom: 10,
    ...mixStyles(['ph3', 'pv1', 'mh1'], general),
  },
  rootSecondary: {
    backgroundColor: palette.secondary,
    borderWidth: 1,
    borderColor: palette.secondaryLight,
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

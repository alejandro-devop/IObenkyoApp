export default ({palette = {}, styles: {general, typography}, mixStyles}) => ({
  loader: {
    position: 'absolute',
    right: 10,
    // top: 4,
  },
  root: {
    backgroundColor: palette.primary,
    borderWidth: 1,
    borderColor: palette.primary,
    borderRadius: 40,
    flexDirection: 'row',
    alignItems: 'center',
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
    width: '100%',
    ...mixStyles(['paragraph', 'bold'], typography),
  },
  textLoading: {
    marginRight: 5,
  },
  textDisabled: {
    color: palette.grayLight,
  },
});

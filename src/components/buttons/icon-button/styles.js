export default ({palette = {}, styles: {general}, mixStyles}) => ({
  icon: {
    fontSize: 24,
    color: '#FFF',
  },
  iconSM: {
    fontSize: 18,
  },
  root: {
    backgroundColor: palette.primaryDark,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    width: 40,
    height: 40,
  },
  rootSM: {
    width: 30,
    height: 30,
  },
  rootLG: {
    width: 45,
    height: 45,
  },
  rootSecondary: {
    backgroundColor: palette.secondaryLight,
  },
  rootDisabled: {
    opacity: 0.3,
  },
  wrapper: {
    alignItems: 'center',
    ...mixStyles(['mh1'], general),
  },
});

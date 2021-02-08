export default ({palette}) => ({
  buttonWrapper: {
    alignItems: 'center',
    backgroundColor: palette.secondaryLight,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
    width: 45,
    height: 45,
  },
  buttonWrapperPrimary: {
    backgroundColor: palette.primary,
  },
  buttonWrapperSuccess: {
    backgroundColor: palette.successTransparent,
  },
  buttonWrapperDanger: {
    backgroundColor: palette.dangerTransparent,
  },
  buttonWrapperSM: {
    width: 40,
    height: 40,
  },
  icon: {
    color: '#FFF',
    fontSize: 25,
  },
  iconSM: {
    fontSize: 25,
  },
  label: {
    marginTop: 5,
  },
  root: {
    alignItems: 'center',
  },
});

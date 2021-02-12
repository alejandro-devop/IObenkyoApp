export default ({palette}) => ({
  buttonWrapper: {
    alignItems: 'center',
    backgroundColor: palette.secondaryTransparent,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
    width: 40,
    height: 40,
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
    width: 35,
    height: 35,
  },
  icon: {
    color: '#FFF',
    fontSize: 20,
  },
  iconSM: {
    fontSize: 18,
  },
  label: {
    marginTop: 5,
  },
  root: {
    alignItems: 'center',
  },
});

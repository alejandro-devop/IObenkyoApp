export default ({palette}) => ({
  buttonWrapper: {
    alignItems: 'center',
    backgroundColor: palette.secondaryTransparent,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
    width: 60,
    height: 60,
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
  icon: {
    color: '#FFF',
    fontSize: 35,
  },
  label: {
    marginTop: 5,
  },
  root: {
    alignItems: 'center',
  },
});

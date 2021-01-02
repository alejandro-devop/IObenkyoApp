export default ({palette = {}}) => ({
  icon: {
    color: '#FFF',
  },
  iconWrapper: {
    backgroundColor: palette.secondaryDark,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
  },
  iconWrapperSelected: {
    backgroundColor: palette.primaryDark,
  },
  root: {
    backgroundColor: palette.secondary,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    borderRadius: 20,
    minWidth: 120,
    minHeight: 40,
  },
  rootSelected: {
    backgroundColor: palette.primary,
  },
  textWrapper: {
    marginLeft: 10,
  },
});

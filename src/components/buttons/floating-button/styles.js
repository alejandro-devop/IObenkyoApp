export default ({palette = {}}) => ({
  icon: {
    color: '#FFF',
    fontSize: 25,
  },
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.primary,
    borderRadius: 100,
    height: 45,
    width: 45,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  rootSecondary: {
    backgroundColor: palette.secondary,
  },
  rootSuccess: {
    backgroundColor: palette.success,
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});

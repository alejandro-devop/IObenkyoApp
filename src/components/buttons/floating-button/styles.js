export default ({palette = {}}) => ({
  icon: {
    color: '#FFF',
    fontSize: 30,
  },
  root: {
    alignItems: 'center',
    backgroundColor: palette.primary,
    borderRadius: 100,
    height: 60,
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
});

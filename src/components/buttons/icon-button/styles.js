export default ({palette = {}}) => ({
  icon: {
    fontSize: 24,
  },
  root: {
    backgroundColor: palette.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    width: 50,
    height: 50,
  },
});

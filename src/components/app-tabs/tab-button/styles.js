export default ({palette = {}}) => ({
  button: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  buttonSelected: {
    backgroundColor: palette.primaryDark,
  },
  icon: {
    color: '#FFF',
    fontSize: 25,
  },
  label: {
    color: '#FFF',
  },
  root: {
    alignItems: 'center',
  },
});

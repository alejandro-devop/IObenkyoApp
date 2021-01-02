export default ({palette = {}}) => ({
  button: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  buttonSelected: {
    backgroundColor: palette.primaryDark,
  },
  icon: {
    color: '#FFF',
    fontSize: 30,
  },
  label: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '600',
  },
  root: {
    alignItems: 'center',
  },
});

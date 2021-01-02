export default ({palette = {}}) => ({
  icon: {
    color: '#FFF',
  },
  offset: {
    width: 50,
  },
  root: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 65,
    backgroundColor: palette.secondaryDark,
    paddingHorizontal: 4,
  },
  safe: {
    backgroundColor: palette.secondaryDark,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  titleIcon: {
    color: '#FFF',
    marginLeft: 10,
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

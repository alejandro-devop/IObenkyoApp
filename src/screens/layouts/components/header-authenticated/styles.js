export default ({palette = {}}) => ({
  rightWrapper: {
    flexDirection: 'row',
  },
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
    minHeight: 50,
    backgroundColor: palette.secondaryDark,
    borderBottomColor: palette.secondaryDark,
    borderBottomWidth: 1,
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

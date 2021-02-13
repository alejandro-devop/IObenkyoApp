export default ({palette = {}}) => ({
  icon: {
    color: palette.secondaryDark,
    fontSize: 35,
  },
  iconsDialog: {
    height: '80%',
  },
  iconWrapper: {
    width: 60,
    height: 60,
    marginHorizontal: 2,
    marginVertical: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  filterWrapper: {
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  root: {},
});

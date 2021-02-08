export default ({palette, states: {}}) => ({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 4,
    paddingBottom: 5,
  },
  wrapper: {
    backgroundColor: palette.secondary,
    borderTopWidth: 1,
    borderTopColor: palette.secondaryLight,
  },
});

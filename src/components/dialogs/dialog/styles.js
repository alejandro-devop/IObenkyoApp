export default ({palette}) => ({
  root: {},
  content: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  titleWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: palette.secondaryTransparent,
    backgroundColor: palette.secondary,
    borderTopStartRadius: 4,
    borderTopEndRadius: 10,
    paddingVertical: 10,
  },
  title: {
    color: '#FFF',
    textAlign: 'center',
  },
});

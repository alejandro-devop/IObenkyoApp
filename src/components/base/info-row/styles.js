export default ({palette = {}, variables: {}}) => ({
  content: {
    paddingVertical: 4,
  },
  contentHorizontal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'center',
    paddingRight: 20,
  },
  icon: {
    color: '#FFF',
  },
  iconWrapper: {
    padding: 10,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.secondary,
    borderRadius: 100,
    marginRight: 20,
  },
  root: {
    backgroundColor: palette.secondaryTransparent,
    flexDirection: 'row',
    borderRadius: 40,
    marginBottom: 5,
  },
  value: {},
});

export default ({palette}) => ({
  overLine: {
    opacity: 0.6,
    position: 'absolute',
    backgroundColor: '#FFF',
    height: 2,
    width: '100%',
    top: '50%',
    transform: [{translateY: -2}],
  },
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: palette.secondaryLight,
    paddingVertical: 8,
  },
  rootSelected: {
    backgroundColor: palette.successTransparent,
  },
  text: {
    marginLeft: 10,
  },
  textWrapper: {
    flex: 1,
  },
});

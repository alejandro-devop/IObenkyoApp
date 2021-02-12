export default ({palette}) => ({
  icon: {
    fontSize: 14,
  },
  iconSecondary: {
    color: palette.secondaryTransparent,
  },
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#FFF',
    width: 22,
    height: 22,
  },
  rootSecondary: {
    borderColor: palette.secondaryTransparent,
  },
  rootChecked: {
    backgroundColor: 'rgba(255,255,255, 0.2)',
  },
});

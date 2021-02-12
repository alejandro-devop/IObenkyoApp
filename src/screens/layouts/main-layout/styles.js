export default ({palette = {}, styles: {general = {}}, mixStyles}) => ({
  image: {
    flex: 1,
    height: '100%',
    position: 'absolute',
    resizeMode: 'cover',
    width: '100%',
    zIndex: -1,
  },
  overlay: {
    backgroundColor: palette.secondaryTransparent,
  },
  root: {
    // backgroundColor: palette.secondaryTransparent,
    backgroundColor: 'rgba(0, 0, 0, 0.28)',
    ...mixStyles(['full', 'ph1'], general),
  },
});

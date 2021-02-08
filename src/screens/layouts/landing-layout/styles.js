export default ({palette}) => ({
  content: {
    flex: 1,

  },
  image: {
    flex: 1,
    height: '100%',
    position: 'absolute',
    resizeMode: 'cover',
    width: '100%',
  },
  root: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    justifyContent: 'center',
  },
  safe: {
    flex: 1,
  },
  scroll: {
    justifyContent: 'center',
    flexGrow: 1,
  },
});

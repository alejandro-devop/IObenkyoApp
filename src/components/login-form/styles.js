const size = 120;
export default ({palette = {}, styles: {general = {}}, mixStyles}) => ({
  actions: {
    ...mixStyles(['displayRow', 'justifyCenter', 'mb2'], general),
  },
  card: {
    ...mixStyles(['pt8'], general),
  },
  content: {
    marginBottom: 10,
  },
  errorMessage: {
    textAlign: 'center',
    color: palette.error,
  },
  image: {
    borderWidth: 4,
    borderColor: palette.blackTransparent,
    width: size,
    height: size,
    borderRadius: 100,
    position: 'absolute',
    alignSelf: 'center',
    transform: [{translateY: -(size / 2)}],
  },
  root: {
    width: '100%',
    paddingHorizontal: 20,
  },
  title: {
    marginBottom: 20,
    textAlign: 'center',
  },
});

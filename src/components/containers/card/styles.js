export default ({palette, styles: {general = {}}, mixStyles}) => ({
  root: {
    backgroundColor: palette.blackTransparent,
    paddingHorizontal: 10,
    width: '100%',
    ...mixStyles(['roundedSquare', 'pv1'], general),
  },
});

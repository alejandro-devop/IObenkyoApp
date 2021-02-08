const size = 120;
export default ({palette, styles: {general}, mixStyles}) => ({
  image: {
    width: size,
    height: size,
    borderWidth: 4,
    borderRadius: 100,
    borderColor: palette.primary,
  },
  root: {
    ...mixStyles(['mt2', 'align:center'], general),
  },
  text: {
    marginTop: 10,
  },
});

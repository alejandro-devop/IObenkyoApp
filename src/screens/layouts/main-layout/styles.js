export default ({palette = {}, styles: {general = {}}, mixStyles}) => ({
  root: {
    backgroundColor: palette.secondaryLight,
    ...mixStyles(['full'], general),
  },
});

export default ({styles: {general = {}}, mixStyles}) => ({
  root: {
    ...mixStyles(['full'], general),
  },
});

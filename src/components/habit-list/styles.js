export default ({styles: {general = {}}, mixStyles}) => ({
  root: {
    ...mixStyles(['full', 'pv1'], general),
  },
});

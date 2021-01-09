export default ({styles: {general = {}}, mixStyles}) => ({
  content: {
    ...mixStyles(['ph1', 'pv1'], general),
  },
});

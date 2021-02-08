export default ({styles: {general = {}}, mixStyles}) => ({
  content: {
    flex: 1,
    ...mixStyles(['mb4'], general),
  },
  root: {
    flex: 1,
    ...mixStyles(['pv1'], general),
  },
});

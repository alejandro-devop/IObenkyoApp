export default ({styles: {general = {}}, mixStyles}) => ({
  actions: {
    ...mixStyles(['displayRow', 'justifyCenter', 'my2'], general),
  },
  card: {
    ...mixStyles(['pt2'], general),
  },
});

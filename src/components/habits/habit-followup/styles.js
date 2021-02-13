export default ({styles: {general = {}}, mixStyles}) => ({
  actions: {
    ...mixStyles(['displayRow', 'justifyCenter'], general),
  },
  root: {
    ...mixStyles(['pt2'], general),
  },
  row: mixStyles(['ph2'], general),
});

export default ({styles: {general = {}}, mixStyles}) => ({
  actions: {
    ...mixStyles(['displayRow', 'justifyCenter'], general),
  },
  row: mixStyles(['ph2'], general),
});

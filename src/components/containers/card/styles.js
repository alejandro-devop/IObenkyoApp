export default ({styles: {general = {}}, mixStyles}) => ({
  root: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: 10,
    width: '100%',
    ...mixStyles(['roundedSquare', 'ph2', 'pv1'], general),
  },
});

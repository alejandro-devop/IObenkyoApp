export default ({palette, styles: {general = {}}, mixStyles}) => ({
  wrapper: {
    alignItems: 'center',
    backgroundColor: palette.secondaryTransparent,
    ...mixStyles(['pv4', 'mt2', 'rounded1'], general),
  },
});

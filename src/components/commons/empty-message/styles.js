export default ({palette, styles: {general = {}}, mixStyles}) => ({
  wrapper: {
    alignItems: 'center',
    backgroundColor: palette.secondaryTransparent,
    width: '100%',
    ...mixStyles(['pv4', 'mt2', 'mb2', 'rounded1'], general),
  },
});

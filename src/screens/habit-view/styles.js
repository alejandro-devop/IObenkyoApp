export default ({palette, styles: {general = {}}, mixStyles}) => ({
  iconContainer: {
    ...mixStyles(['displayRow', 'justifyCenter', 'mt5'], general),
  },
  accomplishedLabel: {
    marginTop: 10,
  },
  accomplishedIcon: {
    fontSize: 60,
    color: palette.success,
  },
  accomplishedWrapper: {
    alignItems: 'center',
  },
  content: {
    ...mixStyles(['ph1', 'pv1'], general),
  },
});

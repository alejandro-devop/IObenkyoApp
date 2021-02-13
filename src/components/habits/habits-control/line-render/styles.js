export default ({palette, styles: {general}, mixStyles}) => ({
  daysWrapper: {
    flexDirection: 'row',
    flex: 1,
  },
  icon: {},
  iconPositive: {
    color: palette.success,
  },
  iconNegative: {
    color: 'red',
  },
  root: {
    backgroundColor: palette.secondaryTransparent,
    ...mixStyles(['pv2', 'mb2', 'rounded1'], general),
  },
  title: {
    marginLeft: 10,
    marginBottom: 10,
  },
  titleWrapper: {
    paddingLeft: 20,
    flexDirection: 'row',
  },
});

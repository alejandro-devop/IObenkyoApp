export default ({
  palette = {},
  styles: {inputs = {}, typography},
  mixStyles,
}) => ({
  control: {
    alignItems: 'center',
    backgroundColor: palette.secondaryTransparent,
    borderRadius: 100,
    borderColor: palette.secondary,
    borderWidth: 2,
    justifyContent: 'center',
    width: 40,
    height: 40,
    marginLeft: 20,
  },
  controlChecked: {
    borderColor: palette.primary,
  },
  controlInner: {
    backgroundColor: palette.primary,
    borderRadius: 100,
    width: 30,
    height: 30,
  },
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  label: {
    ...mixStyles(['label'], inputs),
    ...mixStyles(['paragraph', 'bold'], typography),
  },
  labelSecondary: {
    ...mixStyles(['labelSecondary'], inputs),
  },
  labelDisabled: {
    ...mixStyles(['labelDisabled'], inputs),
  },
});

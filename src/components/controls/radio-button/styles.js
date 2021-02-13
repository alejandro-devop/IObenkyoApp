export default ({
  palette = {},
  styles: {inputs = {}, typography},
  mixStyles,
}) => ({
  control: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 100,
    borderColor: palette.secondary,
    borderWidth: 4,
    justifyContent: 'center',
    width: 40,
    height: 40,
  },
  controlSpacing: {},
  controlSmall: {
    width: 30,
    height: 30,
  },
  controlChecked: {
    borderColor: palette.primary,
  },
  controlInner: {
    backgroundColor: palette.primary,
    borderRadius: 100,
    width: 25,
    height: 25,
  },
  controlInnerSecondary: {
    backgroundColor: palette.primary,
    borderRadius: 100,
    width: 20,
    height: 20,
  },
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  label: {
    marginRight: 20,
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

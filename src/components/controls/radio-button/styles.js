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
    width: 35,
    height: 35,
  },
  controlSpacing: {},
  controlSmall: {
    width: 30,
    height: 30,
  },
  controlChecked: {
    borderColor: palette.primary,
  },
  controlCheckedSuccess: {
    borderColor: palette.success,
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
  controlInnerCheckedSuccess: {
    backgroundColor: palette.success,
  },
  controlInnerCheckedDanger: {
    backgroundColor: palette.danger,
  },
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginRight: 20,
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

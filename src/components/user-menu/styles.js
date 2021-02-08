export default ({palette, states: {hasNotch}}) => ({
  closeButton: {
    borderWidth: 2,
    borderColor: palette.secondaryContrast,
  },
  closeButtonWrapper: {
    position: 'absolute',
    zIndex: 2,
    right: 0,
    top: 0,
    transform: [{translateX: 20}],
    ...(hasNotch
      ? {transform: [{translateX: 20}, {translateY: 40}]}
      : {transform: [{translateX: 20}, {translateY: 20}]}),
  },
  closeControl: {
    height: '100%',
    position: 'absolute',
    width: '100%',
  },
  container: {
    height: '100%',
  },
  optionsWrapper: {
    paddingHorizontal: 10,
    marginTop: 10,
  },
  root: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 200,
  },
  safe: {
    backgroundColor: palette.secondary,
    flexGrow: 1,
    zIndex: 1,
  },
});

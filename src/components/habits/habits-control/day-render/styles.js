export default ({palette}) => ({
  counterText: {
    position: 'absolute',
    fontSize: 14,
    fontWeight: '600',
    zIndex: 2,
  },
  controlWrapper: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayText: {
    fontWeight: '600',
  },
  root: {
    alignItems: 'center',
    flex: 1,
    marginTop: 8,
  },
  todayIndicator: {
    width: 8,
    height: 8,
    position: 'absolute',
    top: 0,
    transform: [{translateY: -10}],
    borderRadius: 100,
    backgroundColor: palette.primary,
  },
  track: {
    height: 8,
    right: '20%',
    position: 'absolute',
    bottom: 14,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    zIndex: -2,
  },
});

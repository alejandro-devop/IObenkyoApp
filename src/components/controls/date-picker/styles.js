export default ({palette = {}}) => ({
  actionsWrapper: {
    flexDirection: 'row',
    position: 'absolute',
    right: -15,
    top: -15,
    zIndex: 100,
  },
  calendarWrapper: {
    backgroundColor: 'rgba(255,255,255, 0.8)',
    borderRadius: 40,
    marginBottom: 40,
  },
  calendarWrapperSecondary: {
    backgroundColor: palette.secondaryTransparent,
  },
  closeIcon: {
    color: palette.primary,
  },
  closeButton: {
    marginRight: 10,
    borderWidth: 2,
    borderColor: '#FFF',
  },
});

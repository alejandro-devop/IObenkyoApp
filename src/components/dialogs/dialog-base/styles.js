export default () => ({
  backDrop: {
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'rgba(255, 255, 255, 0.6)',
    backgroundColor: 'rgba(0,0,0,0.6)',
    zIndex: 1,
  },
  contentWrapper: {
    paddingHorizontal: 0,
    width: '95%',
    minHeight: '20%',
    height: '50%',
    maxHeight: '80%',
    maxWidth: '95%',
    backgroundColor: '#FFF',
    borderRadius: 5,
    zIndex: 2,
  },
});

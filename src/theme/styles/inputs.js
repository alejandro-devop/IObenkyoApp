import palette from '../palette';

export default {
  inputWrapper: {
    marginBottom: 10,
  },
  inputBase: {
    height: 40,
    borderRadius: 40,
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    fontSize: 18,
  },
  inputSecondary: {
    backgroundColor: palette.primaryTransparent,
    color: '#FFF',
  },
  inputDisabled: {
    backgroundColor: palette.grayTransparent,
    opacity: 0.6,
  },
  label: {
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 2,
    paddingLeft: 10,
  },
  labelLeft: {
    textAlign: 'left',
  },
  labelSecondary: {
    color: '#FFF',
  },
  labelDisabled: {
    color: palette.gray,
  },
};

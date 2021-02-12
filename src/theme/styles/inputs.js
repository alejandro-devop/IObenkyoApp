import palette from '../palette';

export default {
  inputWrapper: {
    marginBottom: 10,
  },
  inputBase: {
    height: 35,
    borderRadius: 40,
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    fontSize: 16,
  },
  inputSecondary: {
    backgroundColor: palette.primaryTransparent,
    color: palette.primaryDark,
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
    color: palette.primary,
  },
  labelDisabled: {
    color: palette.gray,
  },
};

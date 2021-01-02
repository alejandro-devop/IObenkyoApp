import palette from '../palette';

export default {
  inputWrapper: {
    marginBottom: 20,
  },
  inputBase: {
    height: 50,
    borderRadius: 40,
    paddingHorizontal: 25,
    paddingVertical: 10,
    backgroundColor: palette.primaryTransparent,
    fontSize: 20,
  },
  inputDisabled: {
    backgroundColor: palette.grayTransparent,
    opacity: 0.6,
  },
  label: {
    color: palette.primaryDark,
    textAlign: 'center',
    marginBottom: 2,
    paddingLeft: 10,
  },
  labelDisabled: {
    color: palette.gray,
  },
};

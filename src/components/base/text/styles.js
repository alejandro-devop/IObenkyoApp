import palette from 'theme/palette';

export default ({styles: {typography = {}}, mixStyles}) => ({
  root: {
    ...mixStyles(['text'], typography),
  },
  rootCenter: {
    textAlign: 'center',
  },
  rootRight: {
    textAlign: 'right',
  },
  rootCaption: {
    ...mixStyles(['caption'], typography),
  },
  rootParagraph: {
    ...mixStyles(['paragraph'], typography),
  },
  rootSubtitle: {
    ...mixStyles(['subtitle'], typography),
  },
  rootTextSecondary: {
    color: palette.secondaryDark,
  },
  rootTitle: {
    ...mixStyles(['title'], typography),
  },
});

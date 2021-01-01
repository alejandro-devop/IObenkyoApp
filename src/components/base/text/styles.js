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
  rootTitle: {
    ...mixStyles(['title'], typography),
  },
});

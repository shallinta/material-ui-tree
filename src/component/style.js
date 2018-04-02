const styles = theme => ({
  paper: {
    paddingTop: 20,
    paddingBottom: 20
  },
  caption: {
    fontSize: 16,
    textAlign: 'center'
  },
  treeNode: {
    height: 32
  },
  treeIcon: {
    width: 16,
    height: 16,
    marginRight: 8
  },
  treeIconButton: {
    color: theme.palette.primary.light
  },
  treeText: {
    flex: '0 0 auto',
    paddingLeft: 8,
    paddingRight: 24
  },
  treeTextFlex: {
    flex: 1
  },
  treeTextButton: {
    color: theme.palette.primary.light
  },
  button: {
    minWidth: 'auto',
    minHeight: 'auto',
    width: 'auto',
    height: 'auto',
    fontSize: 12,
    lineHeight: 1,
    padding: 4
  }
});

export default styles;

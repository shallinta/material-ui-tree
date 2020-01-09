"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _muiOrgMaterialUi = require("@bit/mui-org.material-ui.styles");

var _default = (0, _muiOrgMaterialUi.makeStyles)(function (theme) {
  return {
    paper: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3)
    },
    caption: {
      fontSize: 16,
      textAlign: 'center'
    },
    item: {
      width: 'auto',
      height: 32,
      paddingRight: theme.spacing(2)
    },
    treeIconContainer: {
      minWidth: 'initial'
    },
    treeIcon: {
      width: 16,
      height: 16,
      marginRight: 8
    },
    treeIconButton: {
      color: theme.palette.primary.light
    },
    treeTextButton: {
      color: theme.palette.primary.light
    },
    treeText: {
      flex: '0 0 auto',
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(3)
    },
    treeTextFlex: {
      flex: 1
    },
    button: {
      minWidth: 'auto',
      minHeight: 'auto',
      width: 'auto',
      height: 'auto',
      fontSize: 12,
      lineHeight: 1,
      padding: 4
    },
    actionIcon: {
      width: 12,
      height: 12
    }
  };
});

exports["default"] = _default;

//# sourceMappingURL=style.js.map
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = require('@material-ui/core/styles');

var _ListItem = require('@material-ui/core/ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _ListItemIcon = require('@material-ui/core/ListItemIcon');

var _ListItemIcon2 = _interopRequireDefault(_ListItemIcon);

var _ListItemText = require('@material-ui/core/ListItemText');

var _ListItemText2 = _interopRequireDefault(_ListItemText);

var _ListItemSecondaryAction = require('@material-ui/core/ListItemSecondaryAction');

var _ListItemSecondaryAction2 = _interopRequireDefault(_ListItemSecondaryAction);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MuiTreeLeaf = function MuiTreeLeaf(_ref) {
  var classes = _ref.classes,
      onClick = _ref.onClick,
      onPrimaryClick = _ref.onPrimaryClick,
      id = _ref.id,
      icon = _ref.icon,
      showButtons = _ref.showButtons,
      actionButtons = _ref.actionButtons,
      text = _ref.text,
      textClassName = _ref.textClassName;
  return _react2.default.createElement(
    _ListItem2.default,
    {
      dense: true,
      button: true,
      className: classes.treeNode,
      id: 'tree-leaf-' + id,
      onClick: onPrimaryClick || onClick
    },
    icon && _react2.default.createElement(
      _ListItemIcon2.default,
      { onClick: onClick },
      icon
    ),
    _react2.default.createElement(_ListItemText2.default, {
      inset: true,
      primary: text,
      className: (0, _classnames2.default)(classes.treeText, textClassName)
    }),
    showButtons && _react2.default.createElement(
      _ListItemSecondaryAction2.default,
      null,
      actionButtons
    )
  );
};

MuiTreeLeaf.defaultProps = {
  onClick: function onClick() {},
  onPrimaryClick: null,
  id: String(Math.random * 100),
  showButtons: false,
  icon: null,
  actionButtons: null,
  text: '',
  textClassName: ''
};

MuiTreeLeaf.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  onClick: _propTypes2.default.func,
  onPrimaryClick: _propTypes2.default.func,
  id: _propTypes2.default.string,
  icon: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.node, _propTypes2.default.string]),
  showButtons: _propTypes2.default.bool,
  actionButtons: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.node, _propTypes2.default.string]),
  text: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.node, _propTypes2.default.string]),
  textClassName: _propTypes2.default.string
};

exports.default = (0, _styles.withStyles)(_style2.default, { withTheme: true })(MuiTreeLeaf);
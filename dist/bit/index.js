"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _muiOrgMaterialUi = _interopRequireDefault(require("@bit/mui-org.material-ui.paper"));

var _muiOrgMaterialUi2 = _interopRequireDefault(require("@bit/mui-org.material-ui.typography"));

var _muiOrgMaterialUi3 = _interopRequireDefault(require("@bit/mui-org.material-ui.list"));

var _muiOrgMaterialUiIcons = _interopRequireDefault(require("@bit/mui-org.material-ui-icons.keyboard-arrow-up"));

var _muiOrgMaterialUiIcons2 = _interopRequireDefault(require("@bit/mui-org.material-ui-icons.keyboard-arrow-down"));

var _muiOrgMaterialUiIcons3 = _interopRequireDefault(require("@bit/mui-org.material-ui-icons.more-vert"));

var _tree = _interopRequireDefault(require("./tree"));

var _treeContext = _interopRequireDefault(require("./tree-context"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var MuiTree = function MuiTree(props) {
  var classes = (0, _style["default"])();

  var className = props.className,
      title = props.title,
      data = props.data,
      rest = _objectWithoutProperties(props, ["className", "title", "data"]);

  return _react["default"].createElement(_muiOrgMaterialUi["default"], {
    className: (0, _classnames["default"])(classes.paper, className)
  }, title && _react["default"].createElement(_muiOrgMaterialUi2["default"], {
    variant: "h6",
    className: classes.caption
  }, title), data && _react["default"].createElement(_treeContext["default"].Provider, {
    value: rest
  }, _react["default"].createElement(_muiOrgMaterialUi3["default"], {
    dense: true,
    component: "div"
  }, _react["default"].createElement(_tree["default"], {
    data: data,
    depth: 0,
    path: []
  }))));
};

MuiTree.defaultProps = {
  data: {},
  className: '',
  title: '',
  labelKey: 'label',
  valueKey: 'value',
  childrenKey: 'children',
  unfoldFirst: false,
  unfoldAll: false,
  pageSize: 20,
  foldIcon: _react["default"].createElement(_muiOrgMaterialUiIcons["default"], null),
  unfoldIcon: _react["default"].createElement(_muiOrgMaterialUiIcons2["default"], null),
  loadMoreIcon: _react["default"].createElement(_muiOrgMaterialUiIcons3["default"], null),
  actionsAlignRight: false,
  getActionsData: null,
  renderLabel: null,
  renderLoadMoreText: function renderLoadMoreText(page, pageSize, total) {
    return "Loaded pages: ".concat(page + 1, " / Page size: ").concat(pageSize, " / Total: ").concat(total, ". Click here to load more...");
  },
  requestChildrenData: null
};
MuiTree.propTypes = {
  data: _propTypes["default"].object,
  className: _propTypes["default"].string,
  title: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  labelKey: _propTypes["default"].string,
  valueKey: _propTypes["default"].string,
  childrenKey: _propTypes["default"].string,
  unfoldFirst: _propTypes["default"].bool,
  unfoldAll: _propTypes["default"].bool,
  pageSize: _propTypes["default"].number,
  foldIcon: _propTypes["default"].element,
  unfoldIcon: _propTypes["default"].element,
  loadMoreIcon: _propTypes["default"].element,
  actionsAlignRight: _propTypes["default"].bool,
  getActionsData: _propTypes["default"].func,
  renderLabel: _propTypes["default"].func,
  renderLoadMoreText: _propTypes["default"].func,
  requestChildrenData: _propTypes["default"].func
};
var _default = MuiTree;
exports["default"] = _default;

//# sourceMappingURL=index.js.map
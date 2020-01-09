"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _muiOrgMaterialUi = _interopRequireDefault(require("@bit/mui-org.material-ui.collapse"));

var _muiOrgMaterialUi2 = _interopRequireDefault(require("@bit/mui-org.material-ui.list-item"));

var _muiOrgMaterialUi3 = _interopRequireDefault(require("@bit/mui-org.material-ui.list-item-icon"));

var _muiOrgMaterialUi4 = _interopRequireDefault(require("@bit/mui-org.material-ui.list-item-text"));

var _muiOrgMaterialUi5 = require("@bit/mui-org.material-ui.styles");

var _treeNode = _interopRequireDefault(require("./tree-node"));

var _treeContext = _interopRequireDefault(require("./tree-context"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Tree = function Tree(props) {
  var classes = (0, _style["default"])();
  var theme = (0, _muiOrgMaterialUi5.useTheme)();
  var context = (0, _react.useContext)(_treeContext["default"]);
  var unfoldAll = context.unfoldAll,
      unfoldFirst = context.unfoldFirst,
      valueKey = context.valueKey,
      childrenKey = context.childrenKey,
      pageSize = context.pageSize,
      loadMoreIcon = context.loadMoreIcon,
      renderLoadMoreText = context.renderLoadMoreText,
      requestChildrenData = context.requestChildrenData;
  var data = props.data,
      depth = props.depth,
      path = props.path;

  var _useState = (0, _react.useState)(unfoldAll || (depth === 0 ? unfoldFirst : false)),
      _useState2 = _slicedToArray(_useState, 2),
      unfoldStatus = _useState2[0],
      setUnfoldStatus = _useState2[1];

  var children = data[childrenKey] || [];
  var pageCount = Math.ceil(children.length / pageSize);

  var _useState3 = (0, _react.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      page = _useState4[0],
      setPage = _useState4[1];

  var toggleFoldStatus = (0, _react.useCallback)(function () {
    setUnfoldStatus(!unfoldStatus);
  }, [unfoldStatus, setUnfoldStatus]);
  var renderChildren = (0, _react.useCallback)(function () {
    var total = (page + 1) * pageSize;
    var usedChildren = children.slice(0, total);
    return usedChildren.map(function (child, index) {
      return _react["default"].createElement(Tree, {
        key: "tree-branch-".concat(child[valueKey]),
        data: child,
        depth: depth + 1,
        path: path.concat(index)
      });
    });
  }, [valueKey, children, page, pageSize, depth, path]);
  var getIcon = (0, _react.useCallback)(function (icon) {
    return _react["default"].cloneElement(icon, {
      className: (0, _classnames["default"])(classes.treeIcon, classes.treeIconButton)
    });
  }, [classes]);
  var loadNextPage = (0, _react.useCallback)(function () {
    setPage(page + 1);
  }, [page, setPage]);
  var handleClick = (0, _react.useCallback)(function () {
    if (unfoldStatus) {
      // Was unfold, is about to fold.
      toggleFoldStatus();
    } else if (children.length > 0) {
      // Was fold, is about to unfold.
      // Has children, and unfold directly.
      toggleFoldStatus();
    } else if (requestChildrenData && typeof requestChildrenData === 'function') {
      // Was fold, is about to unfold.
      // No children currently,
      // request children data if the `requestChildrenData` method provided.
      requestChildrenData(data, path, toggleFoldStatus);
    } else {
      // Was fold, is about to unfold.
      // No children currently and in the future..
      toggleFoldStatus();
    }
  }, [unfoldStatus, toggleFoldStatus, children, requestChildrenData, data, path]);
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_treeNode["default"], {
    data: data,
    unfoldStatus: unfoldStatus,
    depth: depth,
    path: path,
    toggleFoldStatus: toggleFoldStatus,
    onClick: handleClick
  }), _react["default"].createElement(_muiOrgMaterialUi["default"], {
    "in": unfoldStatus,
    unmountOnExit: true
  }, renderChildren(), unfoldStatus && page + 1 < pageCount && _react["default"].createElement(_muiOrgMaterialUi2["default"], {
    dense: true,
    button: true,
    onClick: loadNextPage,
    className: classes.item,
    style: {
      marginLeft: (depth + 1) * theme.spacing(3)
    }
  }, _react["default"].createElement(_muiOrgMaterialUi3["default"], {
    className: classes.treeIconContainer
  }, getIcon(loadMoreIcon)), _react["default"].createElement(_muiOrgMaterialUi4["default"], {
    primary: renderLoadMoreText(page, pageSize, children.length),
    className: (0, _classnames["default"])(classes.treeText, classes.treeTextButton)
  }))));
};

Tree.propTypes = {
  data: _propTypes["default"].object.isRequired,
  depth: _propTypes["default"].number.isRequired,
  path: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired
};
var _default = Tree;
exports["default"] = _default;

//# sourceMappingURL=tree.js.map
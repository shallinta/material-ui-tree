"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _muiOrgMaterialUi = _interopRequireDefault(require("@bit/mui-org.material-ui.list-item"));

var _muiOrgMaterialUi2 = _interopRequireDefault(require("@bit/mui-org.material-ui.list-item-icon"));

var _muiOrgMaterialUi3 = _interopRequireDefault(require("@bit/mui-org.material-ui.list-item-text"));

var _muiOrgMaterialUi4 = _interopRequireDefault(require("@bit/mui-org.material-ui.button"));

var _muiOrgMaterialUi5 = _interopRequireDefault(require("@bit/mui-org.material-ui.icon-button"));

var _muiOrgMaterialUi6 = _interopRequireDefault(require("@bit/mui-org.material-ui.tooltip"));

var _muiOrgMaterialUi7 = require("@bit/mui-org.material-ui.styles");

var _treeContext = _interopRequireDefault(require("./tree-context"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TreeNode = function TreeNode(props) {
  var classes = (0, _style["default"])();
  var theme = (0, _muiOrgMaterialUi7.useTheme)();
  var context = (0, _react.useContext)(_treeContext["default"]);
  var foldIcon = context.foldIcon,
      unfoldIcon = context.unfoldIcon,
      labelKey = context.labelKey,
      renderLabel = context.renderLabel,
      actionsAlignRight = context.actionsAlignRight,
      getActionsData = context.getActionsData;
  var data = props.data,
      unfoldStatus = props.unfoldStatus,
      depth = props.depth,
      path = props.path,
      toggleFoldStatus = props.toggleFoldStatus,
      onClick = props.onClick;
  var getIcon = (0, _react.useCallback)(function (icon) {
    return _react["default"].cloneElement(icon, {
      className: classes.treeIcon
    });
  }, [classes]);
  var getLabel = (0, _react.useCallback)(function () {
    if (renderLabel && typeof renderLabel === 'function') {
      return renderLabel(data, unfoldStatus);
    }

    return data[labelKey];
  }, [renderLabel, labelKey, data, unfoldStatus]);
  var getBtnClickHandler = (0, _react.useCallback)(function (onBtnClick) {
    return function (e) {
      e.preventDefault();
      e.stopPropagation();
      onBtnClick(e);
    };
  }, []);
  var actions = (0, _react.useMemo)(function () {
    if (getActionsData && typeof getActionsData === 'function') {
      var actionsData = [].concat(getActionsData(data, path, unfoldStatus, toggleFoldStatus) || []);

      if (actionsData && actionsData.length) {
        return actionsData.map(function (action, actIndex) {
          var icon = action.icon,
              label = action.label,
              hint = action.hint,
              _action$style = action.style,
              style = _action$style === void 0 ? {} : _action$style,
              _action$onClick = action.onClick,
              onBtnClick = _action$onClick === void 0 ? function () {} : _action$onClick,
              rest = _objectWithoutProperties(action, ["icon", "label", "hint", "style", "onClick"]);

          var usedStyle = Object.assign({
            marginLeft: theme.spacing(2)
          }, style);
          var btnComp = null;

          if (label) {
            btnComp = _react["default"].createElement(_muiOrgMaterialUi4["default"], {
              size: "small"
            }, icon && _react["default"].cloneElement(icon, {
              className: classes.actionIcon
            }), label);
          } else if (icon) {
            btnComp = _react["default"].createElement(_muiOrgMaterialUi5["default"], null, icon);
          }

          if (btnComp) {
            btnComp = _react["default"].cloneElement(btnComp, _objectSpread({
              color: 'primary',
              className: classes.button,
              style: usedStyle,
              onClick: getBtnClickHandler(onBtnClick)
            }, rest));

            if (hint) {
              btnComp = _react["default"].createElement(_muiOrgMaterialUi6["default"], {
                title: hint,
                placement: actionsAlignRight ? 'left' : 'right'
              }, btnComp);
            }
          }

          return btnComp && _react["default"].cloneElement(btnComp, {
            key: "tree-node-".concat(path.join('-'), "-action-").concat(action.id || action.name || action.key || actIndex + 1)
          });
        });
      }
    }

    return null;
  }, [getActionsData, actionsAlignRight, data, path, unfoldStatus, toggleFoldStatus, theme, classes, getBtnClickHandler]);
  return _react["default"].createElement(_muiOrgMaterialUi["default"], {
    dense: true,
    button: true,
    onClick: onClick,
    className: classes.item,
    style: {
      marginLeft: depth * theme.spacing(3)
    }
  }, _react["default"].createElement(_muiOrgMaterialUi2["default"], {
    className: classes.treeIconContainer
  }, unfoldStatus ? getIcon(unfoldIcon) : getIcon(foldIcon)), _react["default"].createElement(_muiOrgMaterialUi3["default"], {
    primary: getLabel(),
    className: (0, _classnames["default"])(classes.treeText, _defineProperty({}, classes.treeTextFlex, actionsAlignRight))
  }), actions);
};

TreeNode.propTypes = {
  data: _propTypes["default"].object.isRequired,
  unfoldStatus: _propTypes["default"].bool.isRequired,
  depth: _propTypes["default"].number.isRequired,
  path: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
  toggleFoldStatus: _propTypes["default"].func.isRequired,
  onClick: _propTypes["default"].func.isRequired
};
var _default = TreeNode;
exports["default"] = _default;

//# sourceMappingURL=tree-node.js.map
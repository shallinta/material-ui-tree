'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _materialUi = require('material-ui');

var _materialUiIcons = require('material-ui-icons');

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MuiTreeLeaf = function (_React$Component) {
  _inherits(MuiTreeLeaf, _React$Component);

  function MuiTreeLeaf() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MuiTreeLeaf);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MuiTreeLeaf.__proto__ || Object.getPrototypeOf(MuiTreeLeaf)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      showButtons: true
    }, _this.handleButtonClick = function (e, onClick) {
      e.preventDefault();
      e.stopPropagation();
      onClick();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MuiTreeLeaf, [{
    key: 'getActions',
    value: function getActions(data) {
      var _this2 = this;

      var _context$tree = this.context.tree,
          getActionsData = _context$tree.getActionsData,
          actionsAlignRight = _context$tree.actionsAlignRight;
      var _props = this.props,
          classes = _props.classes,
          chdIndex = _props.chdIndex,
          expand = _props.expand,
          doExpand = _props.doExpand;

      if (getActionsData && typeof getActionsData === 'function') {
        var actionsData = getActionsData(data, chdIndex, expand, doExpand);
        if (actionsData && actionsData.length) {
          return actionsData.map(function (actionItem, actionIndex) {
            var icon = actionItem.icon,
                label = actionItem.label,
                hint = actionItem.hint,
                _actionItem$onClick = actionItem.onClick,
                _onClick = _actionItem$onClick === undefined ? function () {} : _actionItem$onClick,
                _actionItem$style = actionItem.style,
                style = _actionItem$style === undefined ? {} : _actionItem$style,
                rest = _objectWithoutProperties(actionItem, ['icon', 'label', 'hint', 'onClick', 'style']);

            var useStyle = Object.assign({ marginLeft: 16 }, style);
            var ButtonComponent = null;
            if (label) {
              ButtonComponent = _react2.default.createElement(
                _materialUi.Button,
                { size: 'small' },
                icon ? _react2.default.cloneElement(icon, { style: { width: 12, height: 12 } }) : null,
                label
              );
            } else if (icon) {
              ButtonComponent = _react2.default.createElement(
                _materialUi.IconButton,
                null,
                icon
              );
            }
            if (ButtonComponent) {
              ButtonComponent = _react2.default.cloneElement(ButtonComponent, _extends({
                color: 'primary',
                onClick: function onClick(e) {
                  return _this2.handleButtonClick(e, _onClick);
                },
                className: classes.button,
                style: useStyle
              }, rest));
            }
            var WrappedButtonComponent = ButtonComponent;
            if (WrappedButtonComponent && hint) {
              WrappedButtonComponent = _react2.default.createElement(
                _materialUi.Tooltip,
                {
                  title: hint,
                  placement: actionsAlignRight ? 'left' : 'right'
                },
                ButtonComponent
              );
            }
            return WrappedButtonComponent ? _react2.default.cloneElement(WrappedButtonComponent, {
              key: 'fab-list-item-' + (actionIndex + 1)
            }) : null;
          });
        }
      }
      return null;
    }
  }, {
    key: 'getLabel',
    value: function getLabel() {
      var _props2 = this.props,
          data = _props2.data,
          expand = _props2.expand;
      var _context$tree2 = this.context.tree,
          labelName = _context$tree2.labelName,
          renderLabel = _context$tree2.renderLabel;

      if (renderLabel && typeof renderLabel === 'function') {
        return renderLabel(data, expand);
      }
      return data[labelName];
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          classes = _props3.classes,
          data = _props3.data,
          onClick = _props3.onClick,
          expand = _props3.expand;
      var _context$tree3 = this.context.tree,
          valueName = _context$tree3.valueName,
          actionsAlignRight = _context$tree3.actionsAlignRight;


      return _react2.default.createElement(
        _materialUi.ListItem,
        {
          dense: true,
          button: true,
          className: classes.treeNode,
          id: 'tree-leaf-' + data[valueName],
          onClick: onClick
        },
        _react2.default.createElement(
          _materialUi.ListItemIcon,
          null,
          expand ? _react2.default.createElement(_materialUiIcons.RemoveCircleOutline, { className: classes.treeIcon }) : _react2.default.createElement(_materialUiIcons.AddCircleOutline, { className: classes.treeIcon })
        ),
        _react2.default.createElement(_materialUi.ListItemText, {
          inset: true,
          primary: this.getLabel(),
          className: (0, _classnames2.default)(classes.treeText, _defineProperty({}, classes.treeTextFlex, actionsAlignRight))
        }),
        this.state.showButtons ? this.getActions(data) : null
      );
    }
  }]);

  return MuiTreeLeaf;
}(_react2.default.Component);

MuiTreeLeaf.defaultProps = {
  onClick: function onClick() {},
  expand: false
};
MuiTreeLeaf.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  data: _propTypes2.default.object.isRequired,
  chdIndex: _propTypes2.default.array.isRequired,
  onClick: _propTypes2.default.func,
  expand: _propTypes2.default.bool,
  doExpand: _propTypes2.default.func.isRequired
};
MuiTreeLeaf.contextTypes = {
  tree: _propTypes2.default.shape({
    labelName: _propTypes2.default.string,
    valueName: _propTypes2.default.string,
    actionsAlignRight: _propTypes2.default.bool,
    getActionsData: _propTypes2.default.func,
    renderLabel: _propTypes2.default.func
  })
};
exports.default = (0, _materialUi.withStyles)(_style2.default, { withTheme: true })(MuiTreeLeaf);
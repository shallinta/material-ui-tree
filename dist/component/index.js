'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTreeLeafDataByIndexArray = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = require('@material-ui/core/styles');

var _Paper = require('@material-ui/core/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _AddCircleOutline = require('@material-ui/icons/AddCircleOutline');

var _AddCircleOutline2 = _interopRequireDefault(_AddCircleOutline);

var _RemoveCircleOutline = require('@material-ui/icons/RemoveCircleOutline');

var _RemoveCircleOutline2 = _interopRequireDefault(_RemoveCircleOutline);

var _treeBranch = require('./tree-branch');

var _treeBranch2 = _interopRequireDefault(_treeBranch);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var _getTreeLeafDataByIndexArray2 = require('../utils/getTreeLeafDataByIndexArray');

var _getTreeLeafDataByIndexArray3 = _interopRequireDefault(_getTreeLeafDataByIndexArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MuiTree = function (_React$Component) {
  _inherits(MuiTree, _React$Component);

  function MuiTree() {
    _classCallCheck(this, MuiTree);

    return _possibleConstructorReturn(this, (MuiTree.__proto__ || Object.getPrototypeOf(MuiTree)).apply(this, arguments));
  }

  _createClass(MuiTree, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var _props = this.props,
          labelName = _props.labelName,
          labelKey = _props.labelKey,
          valueName = _props.valueName,
          valueKey = _props.valueKey,
          childrenName = _props.childrenName,
          childrenKey = _props.childrenKey,
          expandFirst = _props.expandFirst,
          unfoldFirst = _props.unfoldFirst,
          expandAll = _props.expandAll,
          unfoldAll = _props.unfoldAll,
          actionsAlignRight = _props.actionsAlignRight,
          foldIcon = _props.foldIcon,
          unfoldIcon = _props.unfoldIcon,
          getActionsData = _props.getActionsData,
          renderLabel = _props.renderLabel,
          requestChildrenData = _props.requestChildrenData,
          childrenCountPerPage = _props.childrenCountPerPage,
          pageSize = _props.pageSize;

      return {
        tree: {
          labelName: labelKey || labelName,
          valueName: valueKey || valueName,
          childrenName: childrenKey || childrenName,
          expandFirst: unfoldFirst || expandFirst,
          expandAll: unfoldAll || expandAll,
          actionsAlignRight: actionsAlignRight,
          foldIcon: foldIcon,
          unfoldIcon: unfoldIcon,
          getActionsData: getActionsData,
          renderLabel: renderLabel,
          requestChildrenData: requestChildrenData,
          childrenCountPerPage: pageSize || childrenCountPerPage
        }
      };
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props2 = this.props,
          labelName = _props2.labelName,
          valueName = _props2.valueName,
          childrenName = _props2.childrenName,
          expandFirst = _props2.expandFirst,
          expandAll = _props2.expandAll,
          childrenCountPerPage = _props2.childrenCountPerPage;

      if (labelName !== 'label') {
        this.log('labelName', 'labelKey');
      }
      if (valueName !== 'value') {
        this.log('valueName', 'valueKey');
      }
      if (childrenName !== 'children') {
        this.log('childrenName', 'childrenKey');
      }
      if (expandFirst) {
        this.log('expandFirst', 'unfoldFirst');
      }
      if (expandAll) {
        this.log('expandAll', 'unfoldAll');
      }
      if (childrenCountPerPage !== 20) {
        this.log('childrenCountPerPage', 'pageSize');
      }
    }
  }, {
    key: 'log',
    value: function log(key, nextKey) {
      console.warn('The property `' + key + '` is deprecated, and it will be completely removed at next major version. please use `' + nextKey + '` instead.');
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          classes = _props3.classes,
          className = _props3.className,
          data = _props3.data,
          title = _props3.title;


      return _react2.default.createElement(
        _Paper2.default,
        { className: (0, _classnames2.default)(classes.paper, className) },
        title ? _react2.default.createElement(
          _Typography2.default,
          { variant: 'caption', className: classes.caption },
          title
        ) : null,
        _react2.default.createElement(_treeBranch2.default, { data: data, expand: true, layer: 0 })
      );
    }
  }]);

  return MuiTree;
}(_react2.default.Component);

MuiTree.defaultProps = {
  className: '',
  labelName: 'label',
  labelKey: '',
  valueName: 'value',
  valueKey: '',
  childrenName: 'children',
  childrenKey: '',
  data: {},
  title: '',
  expandFirst: false,
  unfoldFirst: false,
  expandAll: false,
  unfoldAll: false,
  childrenCountPerPage: 20,
  pageSize: 0,
  actionsAlignRight: false,
  foldIcon: _react2.default.createElement(_AddCircleOutline2.default, null),
  unfoldIcon: _react2.default.createElement(_RemoveCircleOutline2.default, null),
  getActionsData: null,
  renderLabel: null,
  requestChildrenData: null
};
MuiTree.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  className: _propTypes2.default.string,
  labelName: _propTypes2.default.string,
  labelKey: _propTypes2.default.string,
  valueName: _propTypes2.default.string,
  valueKey: _propTypes2.default.string,
  childrenName: _propTypes2.default.string,
  childrenKey: _propTypes2.default.string,
  data: _propTypes2.default.object,
  title: _propTypes2.default.string,
  expandFirst: _propTypes2.default.bool,
  unfoldFirst: _propTypes2.default.bool,
  expandAll: _propTypes2.default.bool,
  unfoldAll: _propTypes2.default.bool,
  childrenCountPerPage: _propTypes2.default.number,
  pageSize: _propTypes2.default.number,
  actionsAlignRight: _propTypes2.default.bool,
  foldIcon: _propTypes2.default.element,
  unfoldIcon: _propTypes2.default.element,
  getActionsData: _propTypes2.default.func,
  renderLabel: _propTypes2.default.func,
  requestChildrenData: _propTypes2.default.func
};
MuiTree.childContextTypes = {
  tree: _propTypes2.default.shape({
    labelName: _propTypes2.default.string,
    valueName: _propTypes2.default.string,
    childrenName: _propTypes2.default.string,
    actionsAlignRight: _propTypes2.default.bool,
    foldIcon: _propTypes2.default.element,
    unfoldIcon: _propTypes2.default.element,
    getActionsData: _propTypes2.default.func,
    renderLabel: _propTypes2.default.func,
    requestChildrenData: _propTypes2.default.func,
    childrenCountPerPage: _propTypes2.default.number
  })
};
exports.default = (0, _styles.withStyles)(_style2.default, { withTheme: true })(MuiTree);
exports.getTreeLeafDataByIndexArray = _getTreeLeafDataByIndexArray3.default;
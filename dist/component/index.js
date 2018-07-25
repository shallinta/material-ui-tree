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

var _styles = require('material-ui/styles');

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Typography = require('material-ui/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

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
          valueName = _props.valueName,
          childrenName = _props.childrenName,
          expandFirst = _props.expandFirst,
          expandAll = _props.expandAll,
          actionsAlignRight = _props.actionsAlignRight,
          getActionsData = _props.getActionsData,
          renderLabel = _props.renderLabel,
          requestChildrenData = _props.requestChildrenData,
          childrenCountPerPage = _props.childrenCountPerPage;

      return {
        tree: {
          labelName: labelName,
          valueName: valueName,
          childrenName: childrenName,
          expandFirst: expandFirst,
          expandAll: expandAll,
          actionsAlignRight: actionsAlignRight,
          getActionsData: getActionsData,
          renderLabel: renderLabel,
          requestChildrenData: requestChildrenData,
          childrenCountPerPage: childrenCountPerPage
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          classes = _props2.classes,
          className = _props2.className,
          data = _props2.data,
          title = _props2.title;


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
  valueName: 'value',
  childrenName: 'children',
  data: {},
  title: '',
  expandFirst: false,
  expandAll: false,
  childrenCountPerPage: 20,
  actionsAlignRight: false,
  getActionsData: null,
  renderLabel: null,
  requestChildrenData: null
};
MuiTree.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  className: _propTypes2.default.string,
  labelName: _propTypes2.default.string,
  valueName: _propTypes2.default.string,
  childrenName: _propTypes2.default.string,
  data: _propTypes2.default.object,
  title: _propTypes2.default.string,
  expandFirst: _propTypes2.default.bool,
  expandAll: _propTypes2.default.bool,
  childrenCountPerPage: _propTypes2.default.number,
  actionsAlignRight: _propTypes2.default.bool,
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
    getActionsData: _propTypes2.default.func,
    renderLabel: _propTypes2.default.func,
    requestChildrenData: _propTypes2.default.func,
    childrenCountPerPage: _propTypes2.default.number
  })
};
exports.default = (0, _styles.withStyles)(_style2.default, { withTheme: true })(MuiTree);
exports.getTreeLeafDataByIndexArray = _getTreeLeafDataByIndexArray3.default;
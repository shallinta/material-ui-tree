'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _core = require('@material-ui/core');

var _MoreVert = require('@material-ui/icons/MoreVert');

var _MoreVert2 = _interopRequireDefault(_MoreVert);

var _treeLeaf = require('./tree-leaf');

var _treeLeaf2 = _interopRequireDefault(_treeLeaf);

var _treeBranchChildrenPage = require('./tree-branch-children-page');

var _treeBranchChildrenPage2 = _interopRequireDefault(_treeBranchChildrenPage);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MuiTreeBranch = function (_React$Component) {
  _inherits(MuiTreeBranch, _React$Component);

  function MuiTreeBranch(props, context) {
    _classCallCheck(this, MuiTreeBranch);

    var _this = _possibleConstructorReturn(this, (MuiTreeBranch.__proto__ || Object.getPrototypeOf(MuiTreeBranch)).call(this, props, context));

    _this.state = {
      expand: false,
      childrenPage: 0
    };

    _this.doExpand = function () {
      _this.setState(function (_ref) {
        var expand = _ref.expand;
        return {
          expand: !expand
        };
      });
    };

    _this.handleClick = function () {
      var expand = _this.state.expand;

      if (!expand) {
        // 即将展开
        if (_this.getChildren().length === 0) {
          // 没有子节点
          var requestChildrenData = _this.context.tree.requestChildrenData;
          var _this$props = _this.props,
              data = _this$props.data,
              chdIndex = _this$props.chdIndex;

          if (requestChildrenData && typeof requestChildrenData === 'function') {
            // 通过配置的方法请求数据
            requestChildrenData(data, chdIndex, _this.doExpand);
          } else {
            // 无子节点
            _this.doExpand();
          }
        } else {
          // 有子节点 直接展开
          _this.doExpand();
        }
      } else {
        // 将收起
        _this.doExpand();
      }
    };

    _this.loadMore = function () {
      _this.setState(function (_ref2) {
        var childrenPage = _ref2.childrenPage;
        return {
          childrenPage: childrenPage + 1
        };
      });
    };

    var layer = props.layer;
    var _context$tree = context.tree,
        expandFirst = _context$tree.expandFirst,
        expandAll = _context$tree.expandAll;

    _this.state = {
      expand: expandAll || (layer === 0 ? expandFirst : false),
      childrenPage: 0
    };
    return _this;
  }

  _createClass(MuiTreeBranch, [{
    key: 'getChildren',
    value: function getChildren() {
      var data = this.props.data;
      var childrenName = this.context.tree.childrenName;

      return data[childrenName] || [];
    }
  }, {
    key: 'renderChildrenByPage',
    value: function renderChildrenByPage(page) {
      var _props = this.props,
          layer = _props.layer,
          chdIndex = _props.chdIndex;
      var childrenCountPerPage = this.context.tree.childrenCountPerPage;

      var children = this.getChildren();
      var startIndex = page * childrenCountPerPage;
      var endIndex = (page + 1) * childrenCountPerPage;
      endIndex = endIndex > children.length ? children.length : endIndex;
      var useChildren = children.slice(startIndex, endIndex);
      return _react2.default.createElement(_treeBranchChildrenPage2.default, {
        key: 'tree-branch-page-' + page,
        data: useChildren,
        expand: this.state.expand,
        layer: layer,
        chdIndex: chdIndex,
        startIndex: startIndex
      });
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var childrenPage = this.state.childrenPage;

      var r = [];
      var index = 0;
      while (index <= childrenPage) {
        r.push(this.renderChildrenByPage(index));
        index += 1;
      }
      return r;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          classes = _props2.classes,
          className = _props2.className,
          data = _props2.data,
          expand = _props2.expand,
          layer = _props2.layer,
          chdIndex = _props2.chdIndex;
      var childrenPage = this.state.childrenPage;
      var childrenCountPerPage = this.context.tree.childrenCountPerPage;

      var children = this.getChildren();
      var pageCount = Math.ceil(children.length / childrenCountPerPage);

      return _react2.default.createElement(
        _core.Collapse,
        { 'in': expand, unmountOnExit: true },
        _react2.default.createElement(
          _core.List,
          {
            dense: true,
            component: 'div',
            className: className,
            style: { paddingLeft: layer > 0 ? 32 : 0 }
          },
          _react2.default.createElement(_treeLeaf2.default, {
            data: data,
            onClick: this.handleClick,
            expand: this.state.expand,
            layer: layer,
            chdIndex: chdIndex,
            doExpand: this.doExpand
          }),
          this.renderChildren(),
          this.state.expand && childrenPage + 1 < pageCount ? _react2.default.createElement(
            _core.ListItem,
            {
              dense: true,
              button: true,
              onClick: this.loadMore,
              className: classes.treeNode,
              style: { paddingLeft: 48 }
            },
            _react2.default.createElement(
              _core.ListItemIcon,
              null,
              _react2.default.createElement(_MoreVert2.default, {
                className: (0, _classnames2.default)(classes.treeIcon, classes.treeIconButton)
              })
            ),
            _react2.default.createElement(_core.ListItemText, {
              inset: true,
              disableTypography: true,
              primary: '\u5DF2\u52A0\u8F7D' + (childrenPage + 1) * childrenCountPerPage + '/' + children.length + '\uFF0C\u70B9\u51FB\u52A0\u8F7D\u66F4\u591A...',
              className: (0, _classnames2.default)(classes.treeText, classes.treeTextButton)
            })
          ) : null
        )
      );
    }
  }]);

  return MuiTreeBranch;
}(_react2.default.Component);

MuiTreeBranch.defaultProps = {
  className: '',
  data: {},
  expand: false,
  chdIndex: []
};
MuiTreeBranch.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  layer: _propTypes2.default.number.isRequired,
  className: _propTypes2.default.string,
  data: _propTypes2.default.any,
  expand: _propTypes2.default.bool,
  chdIndex: _propTypes2.default.array
};
MuiTreeBranch.contextTypes = {
  tree: _propTypes2.default.shape({
    childrenName: _propTypes2.default.string,
    expandFirst: _propTypes2.default.bool,
    expandAll: _propTypes2.default.bool,
    requestChildrenData: _propTypes2.default.func,
    childrenCountPerPage: _propTypes2.default.number
  })
};
exports.default = (0, _core.withStyles)(_style2.default, { withTheme: true })(MuiTreeBranch);
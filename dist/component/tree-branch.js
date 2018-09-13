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

var _styles = require('@material-ui/core/styles');

var _Collapse = require('@material-ui/core/Collapse');

var _Collapse2 = _interopRequireDefault(_Collapse);

var _List = require('@material-ui/core/List');

var _List2 = _interopRequireDefault(_List);

var _MoreVert = require('@material-ui/icons/MoreVert');

var _MoreVert2 = _interopRequireDefault(_MoreVert);

var _treeLeaf = require('./tree-leaf');

var _treeLeaf2 = _interopRequireDefault(_treeLeaf);

var _treeLeafData = require('./tree-leaf-data');

var _treeLeafData2 = _interopRequireDefault(_treeLeafData);

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

    _this.handleClick = function (event) {
      event.stopPropagation(); // Prevent event bubbling
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

    _this.handlePrimaryClick = function (event) {
      var onPrimaryClick = _this.context.tree.onPrimaryClick;

      if (onPrimaryClick && typeof onPrimaryClick === 'function') {
        var _this$props2 = _this.props,
            data = _this$props2.data,
            chdIndex = _this$props2.chdIndex;

        onPrimaryClick(data, chdIndex, _this.doExpand);
      } else {
        _this.handleClick(event);
      }
    };

    _this.doExpand = function () {
      _this.setState(function (_ref) {
        var expand = _ref.expand;
        return {
          expand: !expand
        };
      });
    };

    _this.loadMore = function () {
      _this.setState(function (_ref2) {
        var childrenPage = _ref2.childrenPage;
        return {
          childrenPage: childrenPage + 1
        };
      });
    };

    _this.loadLess = function () {
      _this.setState(function (_ref3) {
        var childrenPage = _ref3.childrenPage;
        return {
          childrenPage: childrenPage - 1
        };
      });
    };

    _this.renderChildren = function () {
      var childrenPage = _this.state.childrenPage;
      var perPage = _this.context.tree.perPage;

      if (perPage) {
        return _this.renderChildrenByPage(childrenPage);
      }
      var r = [];
      for (var index = 0; index <= childrenPage; index++) {
        r.push(_this.renderChildrenByPage(index));
      }
      return r;
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

      return (typeof data[childrenName] === 'string' ? data[data[childrenName]] : data[childrenName]) || [];
    }
  }, {
    key: 'getLoadMoreText',
    value: function getLoadMoreText() {
      var childrenPage = this.state.childrenPage;
      var _context$tree2 = this.context.tree,
          renderLoadMoreText = _context$tree2.renderLoadMoreText,
          childrenCountPerPage = _context$tree2.childrenCountPerPage;

      var children = this.getChildren();
      if (renderLoadMoreText && typeof renderLoadMoreText === 'function') {
        var LoadMoreTextElement = renderLoadMoreText(childrenPage, childrenCountPerPage, children.length);

        return LoadMoreTextElement;
      }

      return null;
    }
  }, {
    key: 'getLoadLessText',
    value: function getLoadLessText() {
      var childrenPage = this.state.childrenPage;
      var _context$tree3 = this.context.tree,
          renderLoadLessText = _context$tree3.renderLoadLessText,
          childrenCountPerPage = _context$tree3.childrenCountPerPage;

      var children = this.getChildren();
      if (renderLoadLessText && typeof renderLoadLessText === 'function') {
        var LoadLessTextElement = renderLoadLessText(childrenPage, childrenCountPerPage, children.length);

        return LoadLessTextElement;
      }

      return null;
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
      var _context$tree4 = this.context.tree,
          childrenCountPerPage = _context$tree4.childrenCountPerPage,
          perPage = _context$tree4.perPage;

      var children = this.getChildren();
      var pageCount = Math.ceil(children.length / childrenCountPerPage);

      return _react2.default.createElement(
        _Collapse2.default,
        { 'in': expand, unmountOnExit: true },
        _react2.default.createElement(
          _List2.default,
          {
            dense: true,
            component: 'div',
            className: className,
            style: { paddingLeft: layer > 0 ? 32 : 0 }
          },
          _react2.default.createElement(_treeLeafData2.default, {
            data: data,
            onPrimaryClick: this.handlePrimaryClick,
            onClick: this.handleClick,
            expand: this.state.expand,
            layer: layer,
            chdIndex: chdIndex,
            doExpand: this.doExpand
          }),
          this.state.expand && perPage && childrenPage > 0 ? _react2.default.createElement(_treeLeaf2.default, {
            onClick: this.loadLess,
            id: 'load-less',
            icon: _react2.default.createElement(_MoreVert2.default, {
              className: (0, _classnames2.default)(classes.treeIcon, classes.treeIconButton)
            }),
            text: this.getLoadLessText()
          }) : null,
          this.renderChildren(),
          this.state.expand && childrenPage + 1 < pageCount ? _react2.default.createElement(_treeLeaf2.default, {
            onClick: this.loadMore,
            id: 'load-more',
            icon: _react2.default.createElement(_MoreVert2.default, {
              className: (0, _classnames2.default)(classes.treeIcon, classes.treeIconButton)
            }),
            text: this.getLoadMoreText()
          }) : null
        )
      );
    }
  }]);

  return MuiTreeBranch;
}(_react2.default.Component);

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
    childrenCountPerPage: _propTypes2.default.number,
    perPage: _propTypes2.default.bool
  })
};
MuiTreeBranch.defaultProps = {
  className: '',
  data: {},
  expand: false,
  chdIndex: []
};
exports.default = (0, _styles.withStyles)(_style2.default, { withTheme: true })(MuiTreeBranch);
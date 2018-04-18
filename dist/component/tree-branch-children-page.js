'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _treeBranch = require('./tree-branch');

var _treeBranch2 = _interopRequireDefault(_treeBranch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TreeBranchChildrenPage = function TreeBranchChildrenPage(props, context) {
  var data = props.data,
      expand = props.expand,
      layer = props.layer,
      chdIndex = props.chdIndex,
      startIndex = props.startIndex;
  var valueName = context.tree.valueName;

  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    data.map(function (item, nextChdIndex) {
      return _react2.default.createElement(_treeBranch2.default, {
        key: 'tree-branch-' + item[valueName],
        expand: expand,
        data: item,
        layer: layer + 1,
        chdIndex: chdIndex.concat(startIndex + nextChdIndex)
      });
    })
  );
};

TreeBranchChildrenPage.propTypes = {
  data: _propTypes2.default.array.isRequired,
  expand: _propTypes2.default.bool.isRequired,
  layer: _propTypes2.default.number.isRequired,
  chdIndex: _propTypes2.default.array.isRequired,
  startIndex: _propTypes2.default.number.isRequired
};

TreeBranchChildrenPage.contextTypes = {
  tree: _propTypes2.default.shape({
    valueName: _propTypes2.default.string
  })
};

exports.default = TreeBranchChildrenPage;
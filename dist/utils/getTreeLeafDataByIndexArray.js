'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getTreeLeafDataByIndexArray = function getTreeLeafDataByIndexArray(data, indexArray) {
  var childrenName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'children';
  var length = indexArray.length;

  var p = 0;
  var r = data;
  while (p < length) {
    r = r[childrenName][indexArray[p]];
    p += 1;
  }
  return r;
};

var withChildrenName = function withChildrenName(childrenName) {
  return function (data, indexArray) {
    return getTreeLeafDataByIndexArray(data, indexArray, childrenName);
  };
};

exports.withChildrenName = withChildrenName;
exports.default = getTreeLeafDataByIndexArray;
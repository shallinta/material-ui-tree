"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.withChildrenKey = void 0;

var getNodeDataByPath = function getNodeDataByPath(data, path) {
  var childrenKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'children';
  var length = path.length;
  var p = 0;
  var r = data;

  while (p < length) {
    r = r[childrenKey][path[p]];
    p += 1;
  }

  return r;
};

var withChildrenKey = function withChildrenKey(key) {
  return function (data, path) {
    return getNodeDataByPath(data, path, key);
  };
};

exports.withChildrenKey = withChildrenKey;
var _default = getNodeDataByPath;
exports["default"] = _default;

//# sourceMappingURL=util.js.map
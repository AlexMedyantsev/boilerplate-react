"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTasks = exports.getDustCount = void 0;

var _nameSpace = _interopRequireDefault(require("./../name-space.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getDustCount = function getDustCount(state) {
  return state[_nameSpace["default"].MONEY].dustCount;
};

exports.getDustCount = getDustCount;

var getTasks = function getTasks(state) {
  return state[_nameSpace["default"].MONEY].tasks;
};

exports.getTasks = getTasks;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCurrentlyOpenedCards = exports.getPackCount = exports.getIsFlippedState = exports.getPackOpeningState = exports.getPacks = exports.getCards = void 0;

var _nameSpace = _interopRequireDefault(require("../name-space.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getCards = function getCards(state) {
  return state[_nameSpace["default"].PICK].cards;
};

exports.getCards = getCards;

var getPacks = function getPacks(state) {
  return state[_nameSpace["default"].PICK].packs;
};

exports.getPacks = getPacks;

var getPackOpeningState = function getPackOpeningState(state) {
  return state[_nameSpace["default"].PICK].isPackOpening;
};

exports.getPackOpeningState = getPackOpeningState;

var getIsFlippedState = function getIsFlippedState(state) {
  return state[_nameSpace["default"].PICK].isFlipped;
};

exports.getIsFlippedState = getIsFlippedState;

var getPackCount = function getPackCount(state) {
  return state[_nameSpace["default"].PICK].packCount;
};

exports.getPackCount = getPackCount;

var getCurrentlyOpenedCards = function getCurrentlyOpenedCards(state) {
  return state[_nameSpace["default"].PICK].currentlyOpenedCards;
};

exports.getCurrentlyOpenedCards = getCurrentlyOpenedCards;
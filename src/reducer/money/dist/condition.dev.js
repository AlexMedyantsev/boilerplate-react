"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = exports.ActionCreator = exports.ActionType = exports.initialState = void 0;

var _common = require("../../utils/common.js");

var initialState = {
  activeCard: null,
  activeMonth: null
};
exports.initialState = initialState;
var ActionType = {
  SET_ACTIVE_CARD: "SET_ACTIVE_CARD",
  RESET_ACTIVE_CARD: "RESET_ACTIVE_CARD",
  SET_ACTIVE_MONTH: "SET_ACTIVE_MONTH"
};
exports.ActionType = ActionType;
var ActionCreator = {
  setActiveCard: function setActiveCard(card) {
    return {
      type: ActionType.SET_ACTIVE_CARD,
      payload: card
    };
  },
  resetActiveCard: function resetActiveCard() {
    return {
      type: ActionType.RESET_ACTIVE_CARD
    };
  },
  setActiveMonth: function setActiveMonth(month) {
    return {
      type: ActionType.SET_ACTIVE_MONTH,
      payload: month
    };
  }
};
exports.ActionCreator = ActionCreator;

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ActionType.SET_ACTIVE_CARD:
      return Object.assign({}, state, {
        activeCard: action.payload
      });

    case ActionType.SET_ACTIVE_MONTH:
      return Object.assign({}, state, {
        activeMonth: action.payload
      });

    case ActionType.RESET_ACTIVE_CARD:
      return Object.assign({}, state, {
        activeCard: null
      });

    default:
      return state;
  }
};

exports.reducer = reducer;
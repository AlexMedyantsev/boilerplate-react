"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = exports.ActionCreator = exports.ActionType = exports.initialState = void 0;

var _common = require("../../utils/common.js");

var _const = require("../../utils/const.js");

var initialState = {
  dustCount: 0,
  mandalaCount: 0,
  tasks: _const.tasks
};
exports.initialState = initialState;
var ActionType = {
  CHANGE_DUST_COUNT: "CHANGE_DUST_COUNT",
  CHANGE_MANDALA_COUNT: "CHANGE_MANDALA_COUNT"
};
exports.ActionType = ActionType;
var ActionCreator = {
  changeDustCount: function changeDustCount(amount) {
    return {
      type: ActionType.CHANGE_DUST_COUNT,
      payload: amount
    };
  },
  changeMandalaCount: function changeMandalaCount(amount) {
    return {
      type: ActionType.CHANGE_MANDALA_COUNT,
      payload: amount
    };
  }
};
exports.ActionCreator = ActionCreator;

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ActionType.CHANGE_DUST_COUNT:
      return (0, _common.extend)(state, {
        dustCount: state.dustCount + action.payload
      });

    case ActionType.CHANGE_MANDALA_COUNT:
      return (0, _common.extend)(state, {
        mandalaCount: state.mandalaCount + action.payload
      });

    default:
      return state;
  }
};

exports.reducer = reducer;
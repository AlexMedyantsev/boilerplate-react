import {extend} from "../../utils/common.js";
import {tasks} from "../../utils/const.js";

export const initialState = {
  dustCount: 0,
  mandalaCount: 0,
  tasks: tasks 
};

export const ActionType = {
  CHANGE_DUST_COUNT: `CHANGE_DUST_COUNT`,
  CHANGE_MANDALA_COUNT: `CHANGE_MANDALA_COUNT`,
};

export const ActionCreator = {
  changeDustCount: (amount) => ({
    type: ActionType.CHANGE_DUST_COUNT,
    payload: amount,
  }),
  changeMandalaCount: (amount) => ({
    type: ActionType.CHANGE_MANDALA_COUNT,
    payload: amount,
  }),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_DUST_COUNT:
      return extend(state, {
        dustCount: state.dustCount + action.payload,
      });
    case ActionType.CHANGE_MANDALA_COUNT:
      return extend(state, {
        mandalaCount: state.mandalaCount + action.payload,
      });
    default:
      return state;
  }
};

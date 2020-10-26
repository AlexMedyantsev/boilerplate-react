import {reducer as reducerPick} from "./pick/pick.js";
import {reducer as reducerCondition} from "./condition/condition.js";
import {reducer as reducerMoney} from "./money/money.js";
import NameSpace from "./name-space.js";
import {combineReducers} from "redux";

export default combineReducers({
  [NameSpace.PICK]: reducerPick,
  [NameSpace.CONDITION]: reducerCondition,
  [NameSpace.MONEY]: reducerMoney,
});

import {extend} from "../../utils/common.js";
import {seasons} from "../../utils/const.js";

export const initialState = {
  activeCard: null,
  activeMonthNumber: null,
  seasons: seasons,
  activeSeasonTab: null,
  activeYear: null,
};

export const ActionType = {
  SET_ACTIVE_CARD: `SET_ACTIVE_CARD`,
  RESET_ACTIVE_CARD: `RESET_ACTIVE_CARD`,
  SET_ACTIVE_MONTH_NUMBER: `SET_ACTIVE_MONTH_NUMBER`,
  SET_ACTIVE_YEAR: `SET_ACTIVE_YEAR`,
  SET_ACTIVE_SEASON: `SET_ACTIVE_SEASON`,
  RESET_ACTIVE_SEASON: `RESET_ACTIVE_SEASON`,
  SET_ACTIVE_SEASON_TAB: `SET_ACTIVE_SEASON_TAB`,
}

export const ActionCreator = {
  setActiveCard: (card) => ({
    type: ActionType.SET_ACTIVE_CARD,
    payload: card,
  }),
  resetActiveCard: () => ({
    type: ActionType.RESET_ACTIVE_CARD,
  }),
  setActiveSeason: (month) => ({
    type: ActionType.SET_ACTIVE_SEASON,
    payload: month,
  }),
  resetActiveSeason: () => ({
    type: ActionType.RESET_ACTIVE_SEASON,
  }),
  setActiveYear: (month) => ({
    type: ActionType.SET_ACTIVE_YEAR,
    payload: month,
  }),
  setActiveSeasonTab: (month) => ({
    type: ActionType.SET_ACTIVE_SEASON_TAB,
    payload: month,
  }),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_CARD:
      return Object.assign({}, state, {
        activeCard: action.payload,
      });
    case ActionType.SET_ACTIVE_MONTH_NUMBER:
      return Object.assign({}, state, {
        activeMonthNumber: action.payload,
      });
    case ActionType.SET_ACTIVE_YEAR:
      return Object.assign({}, state, {
        activeYear: action.payload,
      });
    case ActionType.SET_ACTIVE_SEASON_TAB:
      return Object.assign({}, state, {
        activeSeasonTab: action.payload,
      });
    case ActionType.SET_ACTIVE_SEASON:
      return Object.assign({}, state, {
        seasons: state.seasons.map((season) => {
          if (season.id === action.payload.id) {
            return Object.assign({}, season, {
              isActive: true,
            })
          }
          return season;
        }),
      });
    case ActionType.RESET_ACTIVE_SEASON:
      return Object.assign({}, state, {
        seasons: state.seasons.map((season) => {
          if (season.isActive) {
            return Object.assign({}, season, {
              isActive: false,
            })
          }
          return season;
        }),
      });
    case ActionType.RESET_ACTIVE_CARD:
      return Object.assign({}, state, {
        activeCard: null,
      })
    default:
      return state;
  }
};

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = exports.ActionCreator = void 0;

var _common = require("../../utils/common.js");

var _const = require("../../utils/const.js");

var initialState = {
  cards: _const.collectibles,
  currentlyOpenedCards: null,
  isPackOpening: false,
  isFlipped: false,
  packs: _const.packs
};
var ActionType = {
  SET_CURRENTLY_COLLECTED_CARDS: "SET_CURRENTLY_COLLECTED_CARDS",
  SET_COLLECTED_CARDS: "SET_COLLECTED_CARDS",
  CHANGE_PACK_OPENING_STATE: "CHANGE_PACK_OPENING_STATE",
  DECREASE_PACK_COUNT: "DECREASE_PACK_COUNT",
  INCREASE_PACK_COUNT: "INCREASE_PACK_COUNT",
  CHANGE_IS_FLIPPED_STATE: "CHANGE_IS_FLIPPED_STATE",
  SET_GOLDEN_CARD: "SET_GOLDEN_CARD",
  REMOVE_COLLECTED_CARDS: "REMOVE_COLLECTED_CARDS",
  REMOVE_GOLDEN_CARDS: "REMOVE_GOLDEN_CARDS"
};
var ActionCreator = {
  setCurrentlyCollectedCards: function setCurrentlyCollectedCards(cards) {
    return {
      type: ActionType.SET_CURRENTLY_COLLECTED_CARDS,
      payload: cards
    };
  },
  changePackOpeningState: function changePackOpeningState() {
    return {
      type: ActionType.CHANGE_PACK_OPENING_STATE
    };
  },
  decreasePackCount: function decreasePackCount(count) {
    return {
      type: ActionType.DECREASE_PACK_COUNT,
      payload: count
    };
  },
  increasePackCount: function increasePackCount(count) {
    return {
      type: ActionType.INCREASE_PACK_COUNT,
      payload: count
    };
  },
  changeIsFlippedState: function changeIsFlippedState() {
    return {
      type: ActionType.CHANGE_IS_FLIPPED_STATE
    };
  },
  setCollectedCards: function setCollectedCards(cards) {
    return {
      type: ActionType.SET_COLLECTED_CARDS,
      payload: cards
    };
  },
  removeCollectedCard: function removeCollectedCard(cards) {
    return {
      type: ActionType.REMOVE_COLLECTED_CARDS,
      payload: cards
    };
  },
  removeGoldenCard: function removeGoldenCard(cards) {
    return {
      type: ActionType.REMOVE_GOLDEN_CARDS,
      payload: cards
    };
  },
  setGoldenCard: function setGoldenCard(card) {
    return {
      type: ActionType.SET_GOLDEN_CARD,
      payload: card
    };
  }
};
exports.ActionCreator = ActionCreator;

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ActionType.SET_CURRENTLY_COLLECTED_CARDS:
      return Object.assign({}, state, {
        currentlyOpenedCards: action.payload
      });

    case ActionType.SET_COLLECTED_CARDS:
      return Object.assign({}, state, {
        cards: state.cards.map(function (card) {
          if (card.id === action.payload[0].id) {
            return Object.assign({}, card, {
              isCollected: true
            });
          }

          return card;
        })
      });

    case ActionType.REMOVE_COLLECTED_CARDS:
      return Object.assign({}, state, {
        cards: state.cards.map(function (card) {
          if (card.id === action.payload[0].id) {
            return Object.assign({}, card, {
              isCollected: false
            });
          }

          return card;
        })
      });

    case ActionType.SET_GOLDEN_CARD:
      return Object.assign({}, state, {
        cards: state.cards.map(function (card) {
          if (card.id === action.payload[0].id) {
            return Object.assign({}, card, {
              isGoldBorder: true
            });
          }

          return card;
        })
      });

    case ActionType.REMOVE_GOLDEN_CARDS:
      return Object.assign({}, state, {
        cards: state.cards.map(function (card) {
          if (card.id === action.payload[0].id) {
            return Object.assign({}, card, {
              isGoldBorder: false
            });
          }

          return card;
        })
      });

    case ActionType.CHANGE_PACK_OPENING_STATE:
      return Object.assign({}, state, {
        isPackOpening: !state.isPackOpening
      });

    case ActionType.DECREASE_PACK_COUNT:
      return Object.assign({}, state, {
        packs: state.packs.map(function (pack) {
          if (pack.id === action.payload.id) {
            return Object.assign({}, pack, {
              amount: pack.amount - 1
            });
          }
        })
      });

    case ActionType.INCREASE_PACK_COUNT:
      return Object.assign({}, state, {
        packCount: state.packCount + action.payload
      });

    case ActionType.CHANGE_IS_FLIPPED_STATE:
      return Object.assign({}, state, {
        isFlipped: !state.isFlipped
      });

    default:
      return state;
  }
};

exports.reducer = reducer;
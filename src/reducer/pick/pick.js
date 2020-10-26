import {extend} from "../../utils/common.js";
import {collectibles, seasons, packs} from "../../utils/const.js"

const initialState = {
  cards: collectibles,
  currentlyOpenedCards: null,
  isPackOpening: false,
  isFlipped: false,
  packs: packs,
}

const ActionType = {
  SET_CURRENTLY_COLLECTED_CARDS: `SET_CURRENTLY_COLLECTED_CARDS`,
  SET_COLLECTED_CARDS: `SET_COLLECTED_CARDS`,
  CHANGE_PACK_OPENING_STATE: `CHANGE_PACK_OPENING_STATE`,
  DECREASE_PACK_COUNT: `DECREASE_PACK_COUNT`,
  INCREASE_PACK_COUNT: `INCREASE_PACK_COUNT`,
  CHANGE_IS_FLIPPED_STATE: `CHANGE_IS_FLIPPED_STATE`,
  SET_GOLDEN_CARD: `SET_GOLDEN_CARD`,
  REMOVE_COLLECTED_CARDS: `REMOVE_COLLECTED_CARDS`,
  REMOVE_GOLDEN_CARDS: `REMOVE_GOLDEN_CARDS`,
}

export const ActionCreator = {
  setCurrentlyCollectedCards: (cards) => {
    return {
      type: ActionType.SET_CURRENTLY_COLLECTED_CARDS,
      payload: cards,
    }
  },
  changePackOpeningState: () => ({
    type: ActionType.CHANGE_PACK_OPENING_STATE,
  }),
  decreasePackCount: (count) => ({
    type: ActionType.DECREASE_PACK_COUNT,
    payload: count,
  }),
  increasePackCount: (count) => ({
    type: ActionType.INCREASE_PACK_COUNT,
    payload: count,
  }),
  changeIsFlippedState: () => ({
    type: ActionType.CHANGE_IS_FLIPPED_STATE,
  }),
  setCollectedCards: (cards) => {
    return {
      type: ActionType.SET_COLLECTED_CARDS,
      payload: cards,
    }
  },
  removeCollectedCard: (cards) => {
    return {
      type: ActionType.REMOVE_COLLECTED_CARDS,
      payload: cards,
    }
  },
  removeGoldenCard: (cards) => {
    return {
      type: ActionType.REMOVE_GOLDEN_CARDS,
      payload: cards,
    }
  },
  setGoldenCard: (card) => {
    return {
      type: ActionType.SET_GOLDEN_CARD,
      payload: card,
    }
  }
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CURRENTLY_COLLECTED_CARDS:
      return Object.assign({}, state, {
        currentlyOpenedCards: action.payload,
      });
    case ActionType.SET_COLLECTED_CARDS:
      return Object.assign({}, state, {
        cards: state.cards.map((card) => {
          if (card.id === action.payload[0].id) {
            return Object.assign({}, card, {
              isCollected: true,
            })
          }
          return card;
        })
      });
      case ActionType.REMOVE_COLLECTED_CARDS:
        return Object.assign({}, state, {
          cards: state.cards.map((card) => {
            if (card.id === action.payload[0].id) {
              return Object.assign({}, card, {
                isCollected: false,
              })
            }
            return card;
          })
        });
    case ActionType.SET_GOLDEN_CARD:
      return Object.assign({}, state, {
        cards: state.cards.map((card) => {
          if (card.id === action.payload[0].id) {
            return Object.assign({}, card, {
              isGoldBorder: true,
            })
          }
          return card;
        })
      });
      case ActionType.REMOVE_GOLDEN_CARDS:
        return Object.assign({}, state, {
          cards: state.cards.map((card) => {
            if (card.id === action.payload[0].id) {
              return Object.assign({}, card, {
                isGoldBorder: false,
              })
            }
            return card;
          })
        });
    case ActionType.CHANGE_PACK_OPENING_STATE:
      return Object.assign({}, state, {
        isPackOpening: !state.isPackOpening,
      });
    case ActionType.DECREASE_PACK_COUNT:
      return Object.assign({}, state, {
        packs: state. packs.map((pack) => {
          if (pack.id === action.payload.id) {
            return Object.assign({}, pack, {
              amount: amount + 1
            })
          }
        })
      });
    case ActionType.INCREASE_PACK_COUNT:
      return Object.assign({}, state, {
        packCount: state.packCount + action.payload,
      });
    case ActionType.CHANGE_IS_FLIPPED_STATE:
      return Object.assign({}, state, {
        isFlipped: !state.isFlipped,
      });
    default:
      return state;
  }
}

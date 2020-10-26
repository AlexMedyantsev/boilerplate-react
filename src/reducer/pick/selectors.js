import NameSpace from "../name-space.js";
export const getCards = (state) => state[NameSpace.PICK].cards;
export const getPacks = (state) => state[NameSpace.PICK].packs;
export const getPackOpeningState = (state) => state[NameSpace.PICK].isPackOpening;
export const getIsFlippedState = (state) => state[NameSpace.PICK].isFlipped;
export const getPackCount = (state) => state[NameSpace.PICK].packCount;
export const getCurrentlyOpenedCards = (state) => state[NameSpace.PICK].currentlyOpenedCards;



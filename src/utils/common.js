import moment from 'moment-with-locales-es6';

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const returnLinkToRarityGemImage = (item) => {
  switch (item.rarity) {
    case "blue":
      return " collectibles__gem--blue";
    case "purple":
      return " collectibles__gem--purple";
    case "orange":
      return " collectibles__gem--orange";
    case "green":
      return " collectibles__gem--green";
    default:
      return null;
  }
}

export const escPressHandler = (evt) => {
  if (evt.keyCode === 27) {
  }
}

export const getCollectedCardsCountByRarity = (cards, rarity) => {
  let count = 0;

  cards.map(card => card.rarity === rarity && card.isCollected ? count++ : '')

  return count
}

export const filterCardsByRarity = (cards, rarity) => {
  return cards.filter((card) => card.rarity === rarity)
}

export const filterCardsByMonthDate = (cards, month, year) => {
  return cards.filter((card) => card.monthNumber === month && card.year === year && card.isCollected)
}

const blueGoldCraftCost = 100;
const purpleGoldCraftCost = 200;
const orangeGoldCraftCost = 400;

const blueGoldDisenchantCost = 50;
const purpleGoldDisenchantCost = 100;
const orangeGoldDisenchantCost = 200;

export const calculateGoldPrice = (activeCard) => {
  switch (activeCard.rarity) {
    case "blue":
      return blueGoldCraftCost
    case "purple":
      return purpleGoldCraftCost;
    case "orange":
      return orangeGoldCraftCost;
  }
}

export const calculateDisenchantAmount = (activeCard) => {
  switch (activeCard.rarity) {
    case "blue":
      return activeCard.isGoldBorder ? blueGoldDisenchantCost * 2 : blueGoldDisenchantCost
    case "purple":
      return activeCard.isGoldBorder ? purpleGoldDisenchantCost * 2 : purpleGoldDisenchantCost
    case "orange":
      return activeCard.isGoldBorder ? orangeGoldDisenchantCost * 2 : orangeGoldDisenchantCost
  }
}

export const checkActiveMonth = () => {
  var month = moment().startOf("month").format('MMMM');

  return month
}
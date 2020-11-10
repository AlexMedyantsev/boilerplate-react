import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {AbsoluteMenu} from "../absolute-menu/absolute-menu.jsx";
import {collectibles, CARDS_IN_PACK} from "../../utils/const.js";
import {ActionCreator as ActionCreatorPick} from "../../reducer/pick/pick.js";
import {ActionCreator as ActionCreatorCondition} from "../../reducer/condition/condition.js";
import {getPackOpeningState, getCurrentlyOpenedCards, getIsFlippedState} from "../../reducer/pick/selectors.js";
import {OpenedCardsPopup} from "../opened-cards-popup/opened-cards-popup.jsx";
import {returnLinkToRarityGemImage, filterCardsByMonthDate} from "../../utils/common.js";
import {getDustCount} from "../../reducer/money/selectors.js"
import {Card} from "../card/card.jsx";
import {Header} from "../header/header.jsx";
import moment from "moment";

class Rewards extends PureComponent {
  constructor(props) {
    super();

    this.packClickHandler = this.packClickHandler.bind(this);
    this.generateCards = this.generateCards.bind(this);
  }

  packClickHandler(pack) {
    const {cards} = this.props;
    if (pack.amount > 0 && filterCardsByMonthDate(cards, moment().month(), moment().year()).length < 11) {
      this.props.onSetCurrentlyPickedCards(this.generateCards(cards, pack));
      this.props.onPackOpeningStateChange();
      this.props.decreasePackCount(1);
    }
  }

  generateCards(cards, pack) {
    let gettedCards = [];
    let numbers = [];

    const checkIfCardWillBeGold = (pack) => {
      // Записываем в константу значение от  0 до 100
      let willCardBeGold = Math.floor((Math.random() * 100));

      // Проверяем и делаем карту золотой если пак - золотой
      if (pack.name === 'gold') {
        return true;
      }

      // Если пак не золотой, то делаем ролл, где с 15% вероятностью делаем карту золотой
      if (willCardBeGold > 85) {
        return true;
      } else {
        return false;
      }
    }

    const generateNumbers = (amount) => {
      let n = 0
      while (n < amount) {
        const x = Math.floor(Math.random() * cards.filter((card) => card.monthNumber === pack.monthNumber && card.year === pack.year).length);
        // Проверяем - если карта есть и она золотая, то число n не увеличивается и цикл идет на еще один круг
        if (cards[x].isCollected && cards[x].isGoldBorder) {
          n = 0
          // Проверяем есть ли карта, не золотая ли она и будет ли золотой?
        } else if (cards[x].isCollected && !cards[x].isGoldBorder && checkIfCardWillBeGold(pack)) {
          numbers.push(x);
          n++;
          // 
        } else if (!cards[x].isCollected) {
          numbers.push(x);
          n++;
        }
      };
    }

    generateNumbers(CARDS_IN_PACK);
    console.log(numbers);

    collectibles.slice().filter(item => numbers.includes(item.id) ? gettedCards.push(collectibles[item.id]) : ``);

    if (checkIfCardWillBeGold(pack)) {
      gettedCards.map(item => item.isGoldBorder = true)
    }

    console.log(collectibles);
    console.log(gettedCards);

    return gettedCards;
  }

  render() {
    const {isPackOpening, cards, packs, dustCount, currentlyOpenedCards, setCollectedCards, resetActiveCard, packCount, onPackOpeningStateChange} = this.props;
    return <React.Fragment>
      <Header
        dustCount={dustCount}
      />
      <div className="wrapper">
        {packs.filter(pack => pack.amount > 0).map(
          pack =>
            <div className={isPackOpening ? 'pack pack--disabled' : `pack`} style={{backgroundImage: "url(" + pack.image + ")"}} onClick={() => this.packClickHandler(pack)} >
              <span className="pack-badge">{pack.amount}</span>
            </div>)}
        <div className="pack__opening-cnt">
        </div>
        {isPackOpening ?
          <OpenedCardsPopup
            onPackOpeningStateChange={onPackOpeningStateChange}
            resetActiveCard={resetActiveCard}
            setCollectedCards={setCollectedCards}
            card={currentlyOpenedCards}
          /> :
          ``
        }
      </div>
    </React.Fragment >
  }
}

const mapStateToProps = (state) => {
  return {
    isPackOpening: getPackOpeningState(state),
    isFlipped: getIsFlippedState(state),
    currentlyOpenedCards: getCurrentlyOpenedCards(state),
    dustCount: getDustCount(state),
  }
};

const mapDispatchToProps = (dispatch) => ({
  resetActiveCard: () => dispatch(ActionCreatorCondition.resetActiveCard(dispatch)),
  onSetCurrentlyPickedCards: (cards) => dispatch(ActionCreatorPick.setCurrentlyCollectedCards(cards)),
  onPackOpeningStateChange: () => dispatch(ActionCreatorPick.changePackOpeningState()),
  onIsFlippedStateChange: () => dispatch(ActionCreatorPick.changeIsFlippedState()),
  decreasePackCount: (amount) => dispatch(ActionCreatorPick.decreasePackCount(amount)),
  setCollectedCards: (cards) => dispatch(ActionCreatorPick.setCollectedCards(cards)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Rewards);
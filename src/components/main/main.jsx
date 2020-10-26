import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {getCards} from "../../reducer/pick/selectors.js";
import CardsList from "../cards-list/cards-list.jsx";
import {AboutCard} from "../about-card/about-card.jsx";
import {AbsoluteMenu} from "../absolute-menu/absolute-menu.jsx";
import {Header} from "../header/header.jsx";
import {collectibles} from "../../utils/const.js";
import {ActionCreator as ActionCreatorPick} from "../../reducer/pick/pick.js";
import {ActionCreator as ActionCreatorMoney} from "../../reducer/money/money.js";
import {ActionCreator as ActionCreatorCondition} from "../../reducer/condition/condition.js";
import {ActiveCard, getActiveCard, getActiveMonthNumber, getActiveYearNumber} from "../../reducer/condition/selectors.js";
import {getDustCount} from "../../reducer/money/selectors.js";
import moment from "moment";

import {filterCardsByRarity, filterCardsByMonthDate, getCollectedCardsCountByRarity} from "../../utils/common.js";
import {SortByMonthBar} from "../month-bar/month-bar.jsx";

const activeSeasonNumber = 0;

class Main extends PureComponent {

  constructor(props) {
    super();

  }

  componentDidMount() {
    const {setActiveSeasonTab, seasons} = this.props;
    setActiveSeasonTab(seasons[0]);
  }

  render() {
    const {cards, activeCard, activeMonthNumber, activeYear, setActiveSeason, seasons, resetActiveCard, setGoldenCard, removeGoldenCard, removeCollectedCard, dustCount, changeDustCount} = this.props;
    const filteredCardsByMonth = filterCardsByMonthDate(cards, moment().month(), moment().year());

    return <React.Fragment>
      <div className="wrapper wrapper--column">
        <Header
          dustCount={dustCount}
        />
        <SortByMonthBar
          seasons={seasons}
          setActiveSeason={setActiveSeason}
        />
        <CardsList
          allCardsByRarityCount={filterCardsByRarity(filteredCardsByMonth, "blue").length}
          collectedCardsByRarityCount={getCollectedCardsCountByRarity(filteredCardsByMonth, "blue")}
          cards={filterCardsByRarity(filteredCardsByMonth, "blue")}
        ></CardsList>

        <CardsList
          allCardsByRarityCount={filterCardsByRarity(filteredCardsByMonth, "purple").length}
          collectedCardsByRarityCount={getCollectedCardsCountByRarity(filteredCardsByMonth, "purple")}
          cards={filterCardsByRarity(filteredCardsByMonth, "purple")}
        ></CardsList>

        <CardsList
          allCardsByRarityCount={filterCardsByRarity(filteredCardsByMonth, "orange").length}
          collectedCardsByRarityCount={getCollectedCardsCountByRarity(filteredCardsByMonth, "orange")}
          cards={filterCardsByRarity(filteredCardsByMonth, "orange")}
        ></CardsList>
        {activeCard ?
          <AboutCard
            activeCard={activeCard}
            resetActiveCard={resetActiveCard}
            setGoldenCard={setGoldenCard}
            removeGoldenCard={removeGoldenCard}
            removeCollectedCard={removeCollectedCard}
            changeDustCount={changeDustCount}
            dustCount={dustCount}
          />
          : ``}
      </div>
    </React.Fragment >
  }
}

const mapStateToProps = (state) => {
  return {
    cards: getCards(state),
    activeCard: getActiveCard(state),
    activeMonthNumber: getActiveMonthNumber(state),
    activeYear: getActiveYearNumber(state),
    dustCount: getDustCount(state),
  }
};

const mapDispatchToProps = (dispatch) => ({
  resetActiveCard: () => dispatch(ActionCreatorCondition.resetActiveCard()),
  setGoldenCard: (activeCard) => dispatch(ActionCreatorPick.setGoldenCard(activeCard)),
  removeGoldenCard: (activeCard) => dispatch(ActionCreatorPick.removeGoldenCard(activeCard)),
  removeCollectedCard: (activeCard) => dispatch(ActionCreatorPick.removeCollectedCard(activeCard)),
  changeDustCount: (amount) => dispatch(ActionCreatorMoney.changeDustCount(amount)),
  changeMandalaCount: (amount) => dispatch(ActionCreatorMoney.changeMandalaCount(amount)),
  setActiveSeasonTab: (year) => dispatch(ActionCreatorCondition.setActiveSeasonTab(year)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);
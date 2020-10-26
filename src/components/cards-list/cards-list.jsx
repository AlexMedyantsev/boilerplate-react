import React, {PureComponent} from "react";
import {ActionCreator as ActionCreatorCondition} from "../../reducer/condition/condition.js";
import {getActiveCard} from "../../reducer/condition/selectors.js";
import {connect} from "react-redux";
import {Card} from "../card/card.jsx";


class CardsList extends PureComponent {
  handleCloseButtonClick() {
    this.props.resetActiveCard();
  }

  render() {
    const {cards, allCardsByRarityCount, collectedCardsByRarityCount, setActiveCard} = this.props;
    return (
      <ul className="collectibles">
        <span className="card-count">{collectedCardsByRarityCount}/{allCardsByRarityCount}</span>
        {cards.map((card) => {
          return <Card card={card} setActiveCard={setActiveCard}/>;
        })}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activeCard: getActiveCard(state),
  }
};

const mapDispatchToProps = (dispatch) => ({
  setActiveCard: (card) => dispatch(ActionCreatorCondition.setActiveCard(card)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardsList);

import React from "react";
import {returnLinkToRarityGemImage} from "../../utils/common.js";

class Card extends React.PureComponent {
  constructor() {
    super();

    this.handleCardClick = this.handleCardClick.bind(this);
  }

  handleCardClick(card) {
    this.props.setActiveCard(card);
  }

  render() {
    const {card} = this.props;
    return (
      <div
        class={card.isGoldBorder ? "collectibles-border collectibles-border--gold" : "collectibles-border"}>
        <li
          style={{backgroundImage: "url(" + card.src + ")"}}
          className="collectibles__card"
          onClick={() => this.handleCardClick(card)}
        >
          <div className={"collectibles__gem" + returnLinkToRarityGemImage(card)}> </div>
        </li>
      </div>
    )
  }
}

export {Card}
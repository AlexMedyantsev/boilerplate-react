import React, {PureComponent} from "react";
import {Card} from "../card/card.jsx";


class OpenedCardsPopup extends PureComponent {
  constructor() {
    super();

    this.closeButtonClickHandler = this.closeButtonClickHandler.bind(this);
    this.escPressHandler = this.escPressHandler.bind(this);
  }

  componentDidMount() {
    document.addEventListener(`keydown`, (evt) => this.escPressHandler(evt))
  }

  closeButtonClickHandler() {
    this.props.onPackOpeningStateChange();
    this.props.setCollectedCards(this.props.card);
  }

  escPressHandler(evt) {
    if (evt.keyCode === 27) {
      this.props.onPackOpeningStateChange();
      this.props.setCollectedCards(this.props.card);
    }
  }

  componentWillUnmount() {
    document.removeEventListener(`keydown`, this.escPressHandler);
  }

  render() {
    const {card} = this.props;
    return (
      <div className="black-dime page-container">
        <article className="about-card">
          <button className="close-button" onClick={this.closeButtonClickHandler}></button>
          <Card
            card={card[0]}
          />
        </article>
      </div>
    )
  }
}

export {OpenedCardsPopup};
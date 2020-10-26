import React, {PureComponent} from 'react';
import {Card} from '../card/card.jsx';
import {escPressHandler, calculateGoldPrice, calculateDisenchantAmount} from "../../utils/common.js"

class AboutCard extends PureComponent {
  constructor() {
    super();

    this.closeButtonClickHandler = this.closeButtonClickHandler.bind(this);
    this.onMakeGoldButtonClickHandler = this.onMakeGoldButtonClickHandler.bind(this);
    this.onDisenchantButtonClickHandler = this.onDisenchantButtonClickHandler.bind(this);
    this.escPressHandler = this.escPressHandler.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", (evt) => this.escPressHandler(evt))
  }

  closeButtonClickHandler() {
    this.props.resetActiveCard();
  }

  escPressHandler(evt) {
    if (evt.keyCode === 27) {
      this.props.resetActiveCard();
    }
  }

  onMakeGoldButtonClickHandler() {
    const {activeCard, changeDustCount, dustCount, setGoldenCard} = this.props
    if (!activeCard.isGoldBorder && dustCount >= calculateGoldPrice(activeCard)) {
      setGoldenCard(new Array(activeCard));
      changeDustCount(-calculateGoldPrice(activeCard));
      setTimeout(this.props.resetActiveCard(), 1000);
    }
  }

  onDisenchantButtonClickHandler() {
    const {removeCollectedCard, activeCard, changeDustCount, removeGoldenCard} = this.props;
    removeCollectedCard(new Array(activeCard));
    removeGoldenCard(new Array(activeCard));
    changeDustCount(calculateDisenchantAmount(activeCard));
    setTimeout(this.props.resetActiveCard(), 1000);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.escPressHandler);
  }

  render() {
    const {activeCard} = this.props;
    return (
      <div className="black-dime page-container">
        <article className="about-card">
          <button className="close-button" onClick={this.closeButtonClickHandler}></button>
          <div className="about-card__info-container">
            <div className="left-side-container">
              <span className="about-card__name">{activeCard.name}</span>
              <Card card={activeCard} />
            </div>
            <div className="right-side-container">
              <button
                className={activeCard.isGoldBorder ? "make-card-gold make-card-gold-disabled about-card-action-button" : "make-card-gold make-card-gold-disabled about-card-action-button"}
                onClick={this.onMakeGoldButtonClickHandler}
              >{activeCard.isGoldBorder ? 'Эта карта уже позолочена' : 'Сделать карту Золотой'} <br></br>{activeCard.isGoldBorder ? "" : calculateGoldPrice(activeCard)}</button>
              <button
                className="disenchant-card about-card-action-button"
                onClick={this.onDisenchantButtonClickHandler}
              >Распылить карту <br></br>{calculateDisenchantAmount(activeCard)}</button>
            </div>
          </div>
        </article>
      </div>
    )
  }
}

export {AboutCard};
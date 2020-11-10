import React, {PureComponent} from 'react';
let moment = require("moment");
if ("default" in moment) {
  moment = moment["default"];
}
import {connect} from "react-redux";
import {getSeasons} from "../../reducer/condition/selectors.js";
import {ActionCreator as ActionCreatorCondition} from "../../reducer/condition/condition.js";

console.log(moment().month());
console.log(moment().year());

class SortByMonthBar extends PureComponent {
  constructor() {
    super();

    this.monthClickHandler = this.monthClickHandler.bind(this);
  }

  monthClickHandler(season) {
    const {setActiveSeason, resetActiveSeason} = this.props;

    resetActiveSeason();
    setActiveSeason(season);
  }

  render() {
    const {activeMonth, seasons} = this.props

    return (
      <div className="sort-by-month-container">
        <ul className="month-list">
          {seasons.map((season) => {
            console.log("check if month is is in future " + season.year > moment().year() && season.momth > moment().month())
            return <li
              onClick={() => {this.monthClickHandler(season)}}
              className={season.isActive ? "month-item month-item__current" : "month-item"}
              style={season.year > moment().year() || season.monthNumber > moment().month() ? {display: 'none'} : {display: 'block'}}
            >
              {season.monthName}
            </li>
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    seasons: getSeasons(state),
  }
}

const mapDispatchToProps = (dispatch) => ({
  setActiveSeason: season => dispatch(ActionCreatorCondition.setActiveSeason(season)),
  resetActiveSeason: season => dispatch(ActionCreatorCondition.resetActiveSeason(season)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SortByMonthBar);
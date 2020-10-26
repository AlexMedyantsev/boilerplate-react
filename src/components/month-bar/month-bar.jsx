import React, {PureComponent} from 'react';
let moment = require("moment");
if ("default" in moment) {
    moment = moment["default"];
}

console.log(moment().month());
console.log(moment().year());

class SortByMonthBar extends PureComponent {
  constructor() {
    super();

    this.monthClickHandler = this.monthClickHandler.bind(this);
  }

  monthClickHandler(season) {
    const {setActiveSeason} = this.props;

    if (moment().month().isSameOrAfter(season.monthNumber) && moment().year().isAfter(season.year)) {
      setActiveSeason(season);
    }  
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
            </li>})}
        </ul>
      </div>
    )
  }
}

export {SortByMonthBar};
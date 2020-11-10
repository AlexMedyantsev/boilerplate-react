import React, {PureComponent} from 'react';
import {Header} from "../header/header.jsx";
import {connect} from 'react-redux';
import {getPacks} from "../../reducer/pick/selectors.js";
import {getDustCount} from "../../reducer/money/selectors.js";

class Shop extends PureComponent {
  constructor() {
    super();
  }

  render() {
    const {packs, dustCount} = this.props;
    return (
      <React.Fragment>
        <Header dustCount={dustCount} />
        <ul className="shop-list">
          {packs.map(pack => <li className="shop-item">
            <div class="dime">
              <div class="shop-item-container">
                <div class="shop-item-image" style={{backgroundImage: "url(" + pack.image + ")"}}></div>
                <div class="shop-item-info">
                  <span className="shop-item-name">{pack.name}</span>
                </div>
              </div>
            </div>
          </li>)}
        </ul>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    packs: getPacks(state),
    dustCount: getDustCount(state),
  }
};

const mapDispatchToProps = (dispatch) => ({
  resetActiveCard: () => dispatch(ActionCreatorCondition.resetActiveCard(dispatch)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
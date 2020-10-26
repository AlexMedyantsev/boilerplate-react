import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import history from "../../history.js";
import {Switch, Route, Router} from "react-router-dom";
import Main from "../main/main.jsx";
import Rewards from "../pack/pack.jsx";
import {Tasks} from "../tasks/tasks.jsx"
import {getCards, getPacks} from '../../reducer/pick/selectors.js';
import {getSeasons, getActiveSeason} from '../../reducer/condition/selectors.js';
import {getDustCount, getTasks} from '../../reducer/money/selectors.js';
import {ActionCreator as ActionCreatorCondition} from "../../reducer/condition/condition.js";
import moment from 'moment'

class App extends PureComponent {

  componentDidMount() {
    const {setActiveSeason, seasons} = this.props;
    setActiveSeason(seasons[0])
  }

  renderMain() {
    return (
      <Main 
        cards={this.props.cards}
        seasons={this.props.seasons}
      />
    )
  }

  renderPack() {
    const {cards, packs} = this.props;
    return (
      <Rewards 
        cards={cards}
        packs={packs}
      />
    )
  }

  renderTasks() {
    const {dustCount, seasons, tasks} = this.props;
    return (
      <Tasks 
        dustCount={dustCount}
        seasons={seasons}
        tasks={tasks}
      />
    )
  }

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            {this.renderMain()}
          </Route>
          <Route exact path="/pack">
            {this.renderPack()}
          </Route>
          <Route exact path="/tasks">
            {this.renderTasks()}
          </Route>
        </Switch>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cards: getCards(state),
    seasons: getSeasons(state),
    dustCount: getDustCount(state),
    tasks: getTasks(state),
    packs: getPacks(state),
  }
};

const mapDispatchToProps = (dispatch) => ({
  setActiveSeason: (season) => dispatch(ActionCreatorCondition.setActiveSeason(season)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

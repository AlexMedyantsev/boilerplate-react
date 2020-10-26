import React, {PureComponent} from 'react';
import {Header} from "../header/header.jsx";

class Tasks extends PureComponent {
  constructor() {
    super();

    this.getTimeBeforeReset = this.getTimeBeforeReset.bind(this);
    this.taskClickHandler = this.taskClickHandler.bind(this);
  }

  getTimeBeforeReset() {
    const timeBeforeReset = moment().format('HH:MM');
  }

  taskClickHandler() {

  }

  render() {
    const {dustCount, seasons, tasks} = this.props;
    const activeSeason = seasons.filter(season => season.isActive);

    return (
      <React.Fragment>
        <Header dustCount={dustCount} />
        <div className="row-container">
          {/* <article className="season-container">
            <div className="season-info-container">
              <div className="season-image" style={{backgroundImage: "url(" + activeSeason[0].icon + ")"}}></div>
              <div className="text-container">
                <span className="season-name">{activeSeason[0].iconName}</span>
                <p className="season-text">{activeSeason[0].iconText}</p>
                <button className="season-get-button">Получить</button>
              </div>
            </div>
          </article> */}
          <article className="daily-tasks-container">
            <ul className="daily-tasks-list">
              <div class="daily-tasks-header">Ежедневные задания</div>
              <p class="daily-tasks-time-reset">{}</p>
              {tasks.map(task =>
                <li className="daily-tasks-item" onClick={() => this.taskClickHandler}>
                  <div class="daily-tasks-name">{task.name}</div>
                  <div className="daily-tasks-reward">
                    <div class="daily-tasks-reward-text">{task.amount}</div>
                    <div class="daily-tasks-reward-image" style={{backgroundImage: "url(" + task.image + ")"}}></div>
                  </div>
                </li>
              )}
            </ul>
          </article>
        </div>

        {/* <ul className="rewards-container">
          <li className="rewards-item">
            <span className="rewards-level">1</span>
          </li>
          <li className="rewards-item"></li>
          <li className="rewards-item"></li>
          <li className="rewards-item"></li>
          <li className="rewards-item"></li>
          <li className="rewards-item"></li>
          <li className="rewards-item"></li>
          <li className="rewards-item"></li>
          <li className="rewards-item"></li>
          <li className="rewards-item"></li>

        </ul> */}
      </React.Fragment>
    )
  }
}

export {Tasks};
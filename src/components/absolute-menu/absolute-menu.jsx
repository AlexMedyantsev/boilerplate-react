import React from "react";
import {Link} from "react-router-dom"

class AbsoluteMenu extends React.PureComponent {
  constructor(props) {
    super();
  }

  render() {
    return (
      <ul className="menu">
        <Link to="/" className="menu__item-container">
          <div class="menu__item menu__item--book"></div>
          <div class="menu__item-text">Коллекция</div>
        </Link>
        <Link to="/pack" className="menu__item-container">
          <div class="menu__item menu__item--gift"></div>
          <div class="menu__item-text">Наборы</div>
        </Link>
        <Link to="/tasks" className="menu__item-container">
          <div class="menu__item menu__item--tasks"></div>
          <div class="menu__item-text">Путь</div>
        </Link>
      </ul>
    )
  }
}

export {AbsoluteMenu};
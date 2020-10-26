import React, {PureComponent} from "react";
import {AbsoluteMenu} from "../absolute-menu/absolute-menu.jsx";

class Header extends PureComponent {
  constructor() {
    super();

  }

  render() {
    const {dustCount} = this.props;

    return(
      <header className="header">
        <AbsoluteMenu />
        <div className="header-dust-count">{dustCount}
          <div className="header-dust-icon"></div>
        </div>
      </header>
    )
  }
}

export {Header};
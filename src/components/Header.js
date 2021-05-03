import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      subMenu_Open: false
    }
    this.openSubMenu = this.openSubMenu.bind(this);
  }

  openSubMenu(){
    this.setState(({ subMenu_Open }) => ({
      subMenu_Open: !subMenu_Open
    }))
  }




  render(){
    const openSubMenu = this.openSubMenu;
    const isOpen = this.state.subMenu_Open;
    const shrinkHeader = this.props.shrinkHeader;

    return (
      <div className="header-container">
        <div className="header">
          {shrinkHeader ?
            <></>
          : <div className="main-headers">
            <div className="title-container">
              <h1>Rachel Hovell</h1>
              <h3>Full Stack Web Developer</h3>
            </div>
          </div>}
          <nav className="main-nav">
            <ul className="main-nav-list">
              <li className="main-nav-item">
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
              </li>
              <li className="main-nav-item">
                <span onClick={openSubMenu}>Portfolios</span>
                {isOpen ?
                  <ul className="sub-menu">
                  <li className="sub-menu-item">
                    <NavLink to="/portfolio/web_design" activeClassName="active">Web Design</NavLink>
                  </li>
                  <li className="sub-menu-item">
                    <NavLink to="/portfolio/animation" activeClassName="active">Animation</NavLink>
                  </li>
                </ul>
                :
                <></> }
              </li>
              <li className="main-nav-item">
                <NavLink to="/portfolio/animation" activeClassName="active">Animation</NavLink>
              </li>
            </ul>
          </nav>
        </div>
  </div>
    );

  }
}

export default Header;

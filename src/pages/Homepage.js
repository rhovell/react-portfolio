import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import IconAnimation from '../components/IconAnimation.js'
import LeafAnimation from '../components/LeafAnimation.js'

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const isAnimationActive = this.props.isAnimationActive;
    const stopLeafFall = this.props.stopLeafFall;

    return (
      <div className='homepage fade-in'>

        <div className="about-main">

          <div className="page-header-container">
            <div className="title-container">
              <h2>Rachel Hovell</h2>
              <div className="header-side-icon">
                <i className="fas fa-tree"></i>
              </div>
            </div>
              <h3>Full Stack Web Developer</h3>
          </div>
          <p>Full stack web developer specialising in React JS and web-apps.</p>

          <div className="technologies section">
            <h3>Technologies</h3>
            {isAnimationActive ? <LeafAnimation stopLeafFall={stopLeafFall}/> : <></>}
          </div>

          <IconAnimation/>

        </div>

      </div>
    );
  }
}

export default Homepage;

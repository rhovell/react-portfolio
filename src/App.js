import logo from './logo.svg';
import './App.scss';
import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Homepage from './pages/Homepage.js'
import Portfolio from './pages/Portfolio.js'
import WebDesign from './pages/WebDesign.js'
import Animation from './pages/Animation.js'
import Header from './components/Header.js'
import { debounce } from './components/helpers/debounce.js'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      shrink_header: false,
      classNames: [],
      is_animation_active: true
    }
    this.scrollState = this.scrollState.bind(this);
    this.stopLeafFall = this.stopLeafFall.bind(this);

  }

  scrollState(data){
    let scrollHeight = window.scrollY
    if(scrollHeight > 30){
      this.setState({
        shrink_header: true,
        classNames: ['top-margin']
      })
    } else {
      this.setState({
        shrink_header: false,
        classNames: ['']
      })
    }
  }

  stopLeafFall(){

    setTimeout(() => {
      this.setState({
        is_animation_active: false
      })

    }, 11000)
  }

  render(){
    const scrollState = this.scrollState;
    const shrink_header = this.state.shrink_header;
    const isAnimationActive = this.state.is_animation_active
    const stopLeafFall = this.stopLeafFall;

    return (
      <BrowserRouter>
      <div className={"app "} onWheel={ event => {
          scrollState(event)
        }}>
        <Header shrinkHeader={shrink_header}/>
          <div className="app-container" >
            <Switch>
              <div className="routes" >
                  <Route exact path="/" render={() => (
                    <Homepage isAnimationActive={isAnimationActive} stopLeafFall={stopLeafFall}/>
                  )}/>
                  <Route path="/portfolio" render={() => (
                    <Portfolio/>
                  )}/>
                  <Route path="/portfolio/web_design" render={() => (
                    <WebDesign/>
                  )}/>
                  <Route path="/portfolio/animation" render={() => (
                    <Animation/>
                  )}/>
              </div>
          </Switch>
          </div>
      </div>
    </BrowserRouter>
    );

  }
}

export default App;


// <div className="background-container">
//   <div className="background">
//     <div className="background-image">
//     </div>
//     <div className="background-filter">
//     </div>
//   </div>
// </div>

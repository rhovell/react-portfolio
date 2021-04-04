import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }


  render(){
    return (
      <div className="header">
        <h1>Rachel's Web Design</h1>
      </div>
    );

  }
}

export default Header;

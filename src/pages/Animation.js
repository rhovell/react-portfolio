import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

class Animation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="animation fade-in">
        Animation
      </div>
    );
  }
}

export default Animation;

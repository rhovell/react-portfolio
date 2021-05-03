import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

class AccessibilitySelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount(){
  }


  render() {

    return (
      <div className='accessibility-selector'>
        <form className="accessibility-selector-form" onSubmit={changeStyles}>
          <label htmlFor="accessibility-select">
          Accessibility
          <select className="accessibility" id="accessibilitySelect" name="accessibility-select">
            <option></option>
          </select>
        </form>

      </div>
    );
  }
}

export default AccessibilitySelector;

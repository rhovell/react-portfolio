import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

class IconAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      react: {
        classNames: ['fa-react', 'animation', 'fab', 'fade-in-left', 'fade-in'],
        title: 'React JS'
      },
      js: {
        classNames: ['fa-js-square', 'animation', 'fab', 'bounce', 'bounce-in'],
        title: 'JavaScript'
      },
      git: {
        classNames: ['fa-github', 'animation', 'fab', 'fade-in-top', 'fade-in'],
        title: 'GitHub'
      },
      node: {
        classNames: ['fa-node', 'animation', 'fab', 'fade-in-bottom', 'fade-in'],
        title: 'Node JS'
      },
      css: {
        classNames: ['fa-sass', 'animation', 'fab', 'bounce', 'bounce-in'],
        title: 'Sass and CSS'
      },
      amazon: {
        classNames: ['fa-aws', 'animation', 'fab', 'fade-in-right', 'fade-in'],
        title: 'Amazon web services'
      },
      angular: {
        classNames: ['fa-angular', 'animation', 'fab', 'fade-in-right', 'fade-in'],
        title: 'Angular JS'
      },
      html5: {
        classNames: ['fa-html5', 'animation', 'fab', 'fade-in-right', 'fade-in'],
        title: 'HTML5'
      },
      microsoft: {
        classNames: ['fa-microsoft', 'animation', 'fab', 'fade-in-right', 'fade-in'],
        title: 'Microsoft web services'
      },
      php: {
        classNames: ['fa-php', 'animation', 'fab', 'fade-in-right', 'fade-in'],
        title: 'php'
      }
    }
    this.renderList = this.renderList.bind(this);
  }

  componentDidMount(){
  }



  renderList(){
    const icons = this.state;
    const iterableObjects = Object.values(icons)
    let iconList = []
    for(var i = 0; i < iterableObjects.length; i++){
      let className = iterableObjects[i].classNames
      let classList = className.join(' ')
      let template = <li key={className[0]}><i className={classList} title={iterableObjects[i].title}></i></li>;
      iconList.push(template)
    }
    return iconList
  }

  render() {
    const renderList = this.renderList

    return (
      <div className='language-icon-list-animation'>
      <div className="icon-list">
        <ul className="coding-icons">
          {renderList()}
        </ul>
        <h4>Specialities:</h4>
        <ul>
          <li>React JS</li>
          <li>jQuery</li>
          <li>Sass CSS</li>
          <li>Amazon web services: Cognito, Lambda, API Gateway, DynamoDB</li>

        </ul>
        <h4>Portfolios:</h4>
        <ul>
          <li>GitHub</li>
          <li>Codepen</li>
          <li>Udacity</li>
        </ul>
      </div>

      </div>
    );
  }
}

export default IconAnimation;

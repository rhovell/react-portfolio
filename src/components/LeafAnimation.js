import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { shuffleArray } from './helpers/shuffleArray.js'
import Leaf01 from '../svgs/leaf-animation/leaf01.svg'
import Leaf02 from '../svgs/leaf-animation/leaf02.svg'
import Leaf03 from '../svgs/leaf-animation/leaf03.svg'
import Leaf04 from '../svgs/leaf-animation/leaf04.svg'
import Leaf05 from '../svgs/leaf-animation/leaf05.svg'
import Leaf06 from '../svgs/leaf-animation/leaf06.svg'
import Leaf07 from '../svgs/leaf-animation/leaf07.svg'
import Leaf08 from '../svgs/leaf-animation/leaf08.svg'
import Leaf09 from '../svgs/leaf-animation/leaf09.svg'
import Leaf10 from '../svgs/leaf-animation/leaf10.svg'

import './styles/LeafAnimation.scss'

class LeafAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      is_active: true,
      leaves: {
        leaf01: {
          imageSrc: {Leaf01},
          is_active: true,
          delay: 0.7,
          duration: 6.5,
          initialRotation: 35
        },
        leaf02: {
          imageSrc: {Leaf02},
          is_active: true,
          delay: 0.3,
          duration: 5.6,
          initialRotation: 205
        },
        leaf03: {
          imageSrc: {Leaf03},
          is_active: true,
          delay: 0.28,
          duration: 7,
          initialRotation: -18
        },
        leaf04: {
          imageSrc: {Leaf04},
          is_active: true,
          delay: 0.7,
          duration: 5.3,
          initialRotation: -47
        },
        leaf05: {
          imageSrc: {Leaf05},
          is_active: true,
          delay: 0.1,
          duration: 4.5,
          initialRotation: 69
        },
        leaf06: {
          imageSrc: {Leaf06},
          is_active: true,
          delay: 0.2,
          duration: 6.7,
          initialRotation: 120
        },
        leaf07: {
          imageSrc: {Leaf07},
          is_active: true,
          delay: 0.4,
          duration: 4.9,
          initialRotation: 67
        },
        leaf08: {
          imageSrc: {Leaf08},
          is_active: true,
          delay: 0.6,
          duration: 6.8,
          initialRotation: -35
        },
        leaf09: {
          imageSrc: {Leaf09},
          is_active: true,
          delay: 0.1,
          duration: 4.5,
          initialRotation: 258
        },
        leaf10: {
          imageSrc: {Leaf10},
          is_active: true,
          delay: 0.2,
          duration: 6.7,
          initialRotation: 148
        },
        leaf11: {
          imageSrc: {Leaf05},
          is_active: true,
          delay: 0.4,
          duration: 4.9,
          initialRotation: -26
        },
        leaf12: {
          imageSrc: {Leaf07},
          is_active: true,
          delay: 0.6,
          duration: 6.8,
          initialRotation: 34
        }

      }
    }
    this.renderLeafFall = this.renderLeafFall.bind(this);
  }

  componentDidMount(){

  }


  renderLeafFall(){
    const leaves = Object.values(this.state.leaves)
    let leafList = []
    for(var i = 0; i < leaves.length; i++){
      let src = Object.values(leaves[i].imageSrc)
      let isActive = leaves[i].is_active
      let delay = leaves[i].delay
      let duration = leaves[i].duration
      let initialRotation = leaves[i].initialRotation
      let animationCode = 'fallingLeaves '+duration+'s ease-out ' + delay + 's infinite normal forwards'
      let styleObject = {
        animation: animationCode,
        transform: 'rotate('+initialRotation+'deg)'
      }
      if(isActive === true){
        let template = <li key={'leaf'+[i+1]} ><img src={src} className={'leaf'+[i+1]} style={styleObject}></img></li>
        leafList.push(template)
      }
    }
    this.props.stopLeafFall()
    return shuffleArray(leafList);
  }



  render() {
    const renderLeafFall = this.renderLeafFall
    const iconsList = Object.values(this.state.leaves)
    const is_active = this.state.is_active;

    return (
      <div className='leaf-animation-container'>
        <ul className="leaf-list">
            {renderLeafFall()}
        </ul>
      </div>
    );
  }
}

export default LeafAnimation;

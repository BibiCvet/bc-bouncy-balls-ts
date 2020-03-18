import React, { Component } from "react";
import '../styles/main-window.css';
import Ball from './Ball';
import { BouncyBall } from '../common/types';
import { randomIntFromInterval } from '../common/utils';

type Props = {};
type State = {
  bouncyBalls: BouncyBall[],
};
class Bucket extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    const initialBalls = [{color:"red", speed:(randomIntFromInterval(50, 300)), initX:100, initY:50},
    {color:"white", speed:(randomIntFromInterval(50, 300)), initX:0, initY:150}, ];
    this.state = {
      bouncyBalls: initialBalls,
    };
  }
  
  addBall = (e: React.MouseEvent<HTMLElement>) => {
   const listOfBalls = [...this.state.bouncyBalls];
   const differentSpeed = randomIntFromInterval(5, 300);
   const addItem = {color:"white", speed:(differentSpeed), initX:(e.pageX), initY:(e.pageY)};
   listOfBalls.push(addItem);
   this.setState({bouncyBalls: listOfBalls});
  }

  render() {
    return (
      <div id='mainContainer' className="mainContainer" onClick={this.addBall}>
        <div>
         { this.state.bouncyBalls.map((ball, index) => {
               return <Ball key={index} currentBall={ball} /> 
          })}
      </div>
    </div>
    );
  }
}

export default Bucket;

import React, { Component } from "react";
import { BouncyBall } from '../common/types';

type Props = {
  currentBall: BouncyBall,
};
type State = {
  x: number,
  y: number,
  angle: number,
};

class Ball extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      x: this.props.currentBall.initX,
      y: this.props.currentBall.initY,
      angle: this.props.currentBall.angle,
    };
  }

  componentDidMount() {
    const offsetY = 5;
    const ballSize = 20;
    const root = document.getElementById("mainContainer");
    let lastXCoeff = 2;
    let lastYCoeff = 3;

    setInterval(() => {
      // Recalculate the x,y values of the ball
      const x = this.state.x + lastXCoeff * this.state.angle;
      let y = this.state.y + lastYCoeff * offsetY;
      //if it reaches the top 
      if (root && (y + ballSize > root.offsetHeight || y <= 0)) {
        lastYCoeff = -lastYCoeff;
        y = this.state.y + lastYCoeff * offsetY;
      }
      this.setState({ x, y });
      // the change of interval will change the speed of the ball
    }, this.props.currentBall.speed);
  }

  render() {
    const spanStyle = {
      transform: "translate(" + this.state.x + "px, " + this.state.y + "px )",
      backgroundColor: this.props.currentBall.color
    };

    return <span className="bouncy" style={spanStyle} />;
  }
}

export default Ball;

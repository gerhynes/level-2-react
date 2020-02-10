import React, { Component } from "react";
import { Gesture } from "react-with-gesture";
import { Spring, animated, interpolate } from "react-spring/renderprops";
import { Card } from "elements";

const AnimatedCard = Card.withComponent(animated.div);

export default class Drag extends Component {
  render() {
    return (
      <Gesture>
        {({ down, delta: [xDelta] }) => (
          <Spring
            native
            to={{
              x: down ? xDelta : 0
            }}
            immediate={name => down && name === "x"}
          >
            {({ x }) => (
              <AnimatedCard
                style={{
                  transform: x.interpolate(x => `translateX(${x}px)`)
                }}
              >
                <h1>Drag Me</h1>
              </AnimatedCard>
            )}
          </Spring>
        )}
      </Gesture>
    );
  }
}

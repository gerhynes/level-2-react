import React, { Component } from "react";
import styled from "styled-components";
import { Gesture } from "react-with-gesture";
import { Spring, animated, interpolate } from "react-spring/renderprops";
import { Card } from "elements";

const AnimatedCard = Card.withComponent(animated.div);

const DraggableCard = styled(AnimatedCard)`
  height: 300px;
  position: absolute;
`;

const CardContainer = styled.div`
  position: relative;
  background: #ccc;
  width: 320px;
  height: 300px;
  margin: 0 auto;
  border-radius: 5px;
`;

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
              <CardContainer>
                <DraggableCard
                  style={{
                    transform: interpolate(
                      [
                        x,
                        x.interpolate({
                          range: [-300, 300],
                          output: [-45, 45],
                          extrapolate: "clamp"
                        })
                      ],
                      (x, rotate) => `translateX(${x}px) rotate(${rotate}deg)`
                    )
                  }}
                >
                  <h1>Drag Me</h1>
                </DraggableCard>
              </CardContainer>
            )}
          </Spring>
        )}
      </Gesture>
    );
  }
}

import React, { Component } from "react";
import { Transition, animated, config } from "react-spring/renderprops";
import styled from "styled-components";
import { Portal, absolute } from "utilities";
import Icon from "./Icon";
import { Card } from "./Cards";

const ModalWrapper = styled.div`
  ${absolute()};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AnimatedCard = Card.withComponent(animated.div);

const ModalCard = styled(AnimatedCard)`
  position: relative;
  padding: 2rem;
  min-width: 320px;
  z-index: 10;
  margin-bottom: 100px;
`;

const CloseButton = styled.button`
  ${absolute({
    y: "top",
    x: "right"
  })};
  border: none;
  background: transparent;
  padding: 10px;
  cursor: pointer;
`;

const Background = styled(animated.div)`
  ${absolute()};
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.5;
`;

export default class Modal extends Component {
  render() {
    const { children, toggle, on } = this.props;
    return (
      <Portal>
        <Transition
          items={on}
          unique
          native
          config={config.default}
          from={{ opacity: 0, bgOpacity: 0, y: -50 }}
          enter={{ opacity: 1, bgOpacity: 0.5, y: 0 }}
          leave={{ opacity: 0, bgOpacity: 0, y: 50 }}
        >
          {on =>
            on &&
            (styles => (
              <ModalWrapper>
                <ModalCard
                  style={{
                    transform: styles.y.interpolate(
                      y => `translate3d(0, ${y}px, 0)`
                    ),
                    ...styles
                  }}
                >
                  <CloseButton onClick={toggle}>
                    <Icon name="close" />
                  </CloseButton>
                  <div>{children}</div>
                </ModalCard>
                <Background
                  style={{
                    opacity: styles.bgOpacity.interpolate(
                      bgOpacity => bgOpacity
                    )
                  }}
                  onClick={toggle}
                />
              </ModalWrapper>
            ))
          }
        </Transition>
      </Portal>
    );
  }
}

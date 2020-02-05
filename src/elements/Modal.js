import React, { Component } from "react";
import { Portal, absolute } from "utilities";
import Icon from "./Icon";
import { Card } from "./Cards";
import styled from "styled-components";

const ModalWrapper = styled.div`
  ${absolute()};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalCard = styled(Card)`
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

const Background = styled.div`
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
        {on && (
          <ModalWrapper>
            <ModalCard>
              <CloseButton onClick={toggle}>
                <Icon name="close" />
              </CloseButton>
              <div>{children}</div>
            </ModalCard>
            <Background onClick={toggle} />
          </ModalWrapper>
        )}
      </Portal>
    );
  }
}

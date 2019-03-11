import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components';

class LoaderComponent extends Component {
  render() {
    return (
      <Wrapper>
        <Loader>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </Loader>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  text-align: center;
`

const lineScale = keyframes`
  0% {
    transform: scaley(1);
  }
  50% {
    transform: scaley(.4);
  }
  100% {
    transform: scaley(1);
  }
`;

const Loader = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  display: inline-block;

  & > div {
    display: inline-block;
    width: 4px;
    height: 35px;
    border-radius: 2px;
    margin: 2px;
    background-color: #369efb;

    &:nth-child(1) {
      animation: ${lineScale} 1s -.5s infinite cubic-bezier(.2, .68, .18, 1.08);
    }

    &:nth-child(2) {
      animation: ${lineScale} 1s -.4s infinite cubic-bezier(.2, .68, .18, 1.08);
    }

    &:nth-child(3) {
      animation: ${lineScale} 1s -.3s infinite cubic-bezier(.2, .68, .18, 1.08);
    }

    &:nth-child(4) {
      animation: ${lineScale} 1s -.2s infinite cubic-bezier(.2, .68, .18, 1.08);
    }

    &:nth-child(5) {
      animation: ${lineScale} 1s -.1s infinite cubic-bezier(.2, .68, .18, 1.08);
    }
  }
`;

export default LoaderComponent;
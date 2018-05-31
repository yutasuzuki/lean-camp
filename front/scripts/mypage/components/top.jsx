import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const Content = styled.div`
  width: 640px;
  margin: 50px auto 0;
`;

const Profile = styled.div`
  display: flex;
`;

const Info = styled.div`
  display: block;
  padding-right: 40px;
`;

const ThumbnailContainer = styled.div`
  display: block;
  width: 120px;
  height: 120px;
  border-radius: 60px;
  overflow: hidden;
  border: 2px #f6f6f6 solid;
`;

const Thumbnail = styled.img`
  width: 100%;
  object-fit: contain;
`;

const Name = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 0 0 20px;
`;

const Description = styled.p`
  font-size: 14px;
  margin: 0 0 10px;
`;

const BtnGhost = styled(Link) `
  display: inline-block;
  color: #369efb;
  text-align: center;
  text-decoration: none;
  padding: 4px 20px;
  border: 1px #369efb solid;
  border-radius: 4px;
  transition: .1s ease-in;
  cursor: pointer;

  &:hover {
    background-color: #369efb;
    color: #fff;
  }
`


class LeanCanvas extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Content>
        <Profile>
          <Info>
            <Name>yuta suzuki</Name>
            <Description>I’m web developer!! I like Web frontend technologies and Design thinking</Description>
            <BtnGhost to='/lean_canvas'>edit</BtnGhost>
          </Info>
          <ThumbnailContainer>
            <Thumbnail src='/assets/dammy.jpg' />
          </ThumbnailContainer>
        </Profile>

      </Content>
    )
  }
}

export default LeanCanvas
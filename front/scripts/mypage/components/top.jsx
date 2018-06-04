import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';

class LeanCanvas extends Component {
  constructor(props) {
    super(props);
    axios.get('/api/user').then(({ data }) => {
      this.props.onGetMe(data);
    });
    axios.get('/api/lean_canvas').then(({ data }) => {
      this.props.onGetLeanCanvasList(data);
    });
  }

  render() {
    return (
      <Content>
        <Profile>
          <Info>
            <Name>{this.props.user.username}</Name>
            <Description>I’m web developer!! I like Web frontend technologies and Design thinking</Description>
            <BtnGhost to='/lean_canvas'>Edit</BtnGhost>
          </Info>
          <ThumbnailContainer>
            <Thumbnail src='/assets/dammy.jpg' />
          </ThumbnailContainer>
        </Profile>
        <UserItem>
          <Nav>
            <NavItem>Lean Canvas</NavItem>
            <NavItem>OKR</NavItem>
            <NavItem>MBO</NavItem>
          </Nav>
          <List>
            {this.props.leanCanvas.list.map((value, index) => (
              <LeanCanvasItem value={value} key={index} />
            ))}
          </List>
        </UserItem>
      </Content>
    )
  }
}

let LeanCanvasItem = (props) => {
  return (
    <ListItem>
      <ListItemAnchor to={`/lean_canvas/${props.value.id}`}>
        <ListItemTitle>{props.value.service_name}</ListItemTitle>
      </ListItemAnchor>
    </ListItem>
  )
}

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

const UserItem = styled.div`
  width: 100%;
  margin-top: 48px;
`

const Nav = styled.ul`
  display: block;
  margin: 0 0 24px;
  padding: 0;
  border-bottom: 1px solid #d8dbde;
`
const NavItem = styled.li`
  display: inline-block;
  padding: 8px 0;
  margin: 0 24px -1px 0;
  font-size: 14px;
  border-bottom: 1px solid #4e5067;
`

const List = styled.ul`
  display: block;
  margin: 0;
  padding: 0;
  border: 1px solid #d8dbde;
`

const ListItem = styled.li`
  display: block;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid #d8dbde;

  &:last-child {
    border-bottom: 0;
  }
`
const ListItemAnchor = styled(Link) `
  display: block;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 24px 16px;
  text-decoration: none;
`
const ListItemTitle = styled.div`
  font-size: 20px;
  color: #212121;
`

export default LeanCanvas

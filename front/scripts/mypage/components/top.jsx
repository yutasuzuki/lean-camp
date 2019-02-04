import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { IoIosMore } from 'react-icons/io';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';



class Top extends Component {
  constructor(props) {
    super(props);
    axios.get('/api/user').then(({ data }) => {
      this.props.onGetMe(data);
    });
    axios.get('/api/lean_canvas').then(({ data }) => {
      this.props.onGetLeanCanvasList(data);
    });
    this.state = {
      tabs: []
    };
  }

  async onDeleteItem(item) {
    await axios.delete(`/api/lean_canvas/${item.id}`);
    axios.get('/api/lean_canvas').then(({ data }) => {
      this.props.onGetLeanCanvasList(data);
    });
  }

  render() {
    if (!this.props.user.companies) {
      return <div>Loading</div>
    }
    const companies = this.props.user.companies.map(company => {
       return <div><Link to={`/company/${company.id}`}>{company.name}</Link></div>
    })

    return (
      <Content>
        <Profile>
          <Name>{this.props.user.username}</Name>
          <BtnGhost to='/lean_canvas'>Edit</BtnGhost>
        </Profile>
        { companies.map(company => company ) }
        <UserItem>
          <Tabs>
            <Nav>
              <NavItem>Lean Canvas</NavItem>
              <NavItem>OKR</NavItem>
              <NavItem>MBO</NavItem>
            </Nav>
            <TabPanel>
              <ListTools>
                <BtnFill to='/lean_canvas'>Create</BtnFill>
              </ListTools>
              <List>
                {this.props.leanCanvas.list.map((value, index) => (
                  <Item type='lean_canvas' deleteItem={this.onDeleteItem.bind(this)} value={value} key={index} />
                ))}
              </List>
            </TabPanel>
            <TabPanel>
              <ListTools>
                <BtnFill to='/okr'>Create</BtnFill>
              </ListTools>
            </TabPanel>
            <TabPanel>
              <ListTools>
                <BtnFill to='/okr'>Create</BtnFill>
              </ListTools>
            </TabPanel>
          </Tabs>
        </UserItem>
      </Content>
    )
  }
}

class Item extends Component {
  constructor(props) {
    super(props);
    this.state  = {
      show: false,
    }
  }

  onShowMenu(e) {
    this.setState({show: !this.state.show});
  }

  onClickShare() {
    console.log('Share');
  }

  onClickDelete() {
    this.setState({show: false});
    this.props.deleteItem({ type: this.props.type, id: this.props.value.id });
  }

  render() {
    return (
      <ListItem>
        <ListItemAnchor to={`/lean_canvas/${this.props.value.id}`}>
          <ListItemTitle>{this.props.value.service_name}</ListItemTitle>
        </ListItemAnchor>
        <ListItemMenu>
          <IconMenu data-item={this.props.value.id} onClick={this.onShowMenu.bind(this)}/>
          <Menu className={this.state.show ? 'is-show': ''}>
            <MenuItem>
              <MenuShare onClick={this.onClickShare.bind(this)}>Share</MenuShare>
            </MenuItem>
            <MenuItem>
              <MenuDelete onClick={this.onClickDelete.bind(this)}>Delete</MenuDelete>
            </MenuItem>
          </Menu>
        </ListItemMenu>
      </ListItem>
    )
  }
}

const Menu = styled.ul`
  display: none;
  position: absolute;
  top: 32px;
  right: 16px;
  background-color: #fff;
  margin: 0;
  padding: 16px 32px;
  box-shadow: 0 0 6px -2px #000;
  border-radius: 6px;
  z-index: 1;

  &.is-show {
    display: block;
  }
`;

const MenuItem = styled.li`
  list-style: none;
  padding: 4px 0;
  margin-bottom: 4px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const MenuItemAnchor = styled.a`
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
  font-size: 14px;
  letter-spacing: .1em;
  padding: 2px 4px;
  border-radius: 4px;
  cursor: pointer;
`;

const MenuDelete = styled(MenuItemAnchor)`
  color: #f00;

  &:hover {
    background-color: #f00;
    color: #fff;
  }
`

const MenuShare = styled(MenuItemAnchor)`
  /* color: #369efb;

  &:hover {
    background-color: #2a85d7;
  } */
`

const Content = styled.div`
  width: 640px;
  margin: 50px auto 0;
`;

const Profile = styled.div`
  position: relative;
`;

const Name = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 0 0 20px;
`;

const BtnGhost = styled(Link) `
  position: absolute;
  top: 0;
  right: 0;
  font-family: 'Raleway', sans-serif;
  display: inline-block;
  color: #369efb;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  padding: 4px 20px;
  border: 1px #369efb solid;
  border-radius: 4px;
  transition: .1s ease-in;
  letter-spacing: .1em;
  cursor: pointer;

  &:hover {
    background-color: #369efb;
    color: #fff;
  }
`

const BtnFill = styled(Link) `
  font-family: 'Raleway', sans-serif;
  display: inline-block;
  color: #fff;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  padding: 4px 20px;
  border: 1px #369efb solid;
  border-radius: 4px;
  background-color: #369efb;
  transition: .1s ease-in;
  letter-spacing: .1em;
  cursor: pointer;

  &:hover {
    background-color: #2a85d7;
  }
`

const UserItem = styled.div`
  width: 100%;
  margin-top: 48px;
`

const Nav = styled(TabList)`
  display: block;
  padding: 0;
  margin: 0;
  border-bottom: 1px solid #d8dbde;
`
const NavItem = styled(Tab)`
  display: inline-block;
  padding: 8px 0;
  margin: 0 24px -1px 0;
  font-size: 14px;
  cursor: pointer;

  &.react-tabs__tab--selected {
    border-bottom: 1px solid #4e5067;
    cursor: default;
  }
`

const ListTools = styled.div `
  display: flex;
  justify-content: flex-end;
  padding: 16px 8px;
`;

const List = styled.ul`
  display: block;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid #d8dbde;
`

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid #d8dbde;

  &:hover {
    background-color: #fcfcfc;
  }

  &:last-child {
    border-bottom: 0;
  }
`

const ListItemAnchor = styled(Link) `
  display: block;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 24px 16px 24px 8px;
  text-decoration: none;
`
const ListItemTitle = styled.div`
  font-size: 20px;
  color: #212121;
`

const ListItemMenu = styled.div`
  position: relative;
  padding: 0 16px;
`

const IconMenu = styled(IoIosMore) `
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export default Top

import React, { Component } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { IoIosMore } from 'react-icons/io';
import Loader from './Loader';

const ModalStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0 0 6px -2px #000',
  }
};

class Top extends Component {
  constructor(props) {
    super(props);
    axios.get('/api/user').then(({ data }) => {
      this.props.onGetMe(data);
    });
    axios.get('/api/project').then(({ data }) => {
      console.log(data)
      this.props.onGetProjects(data);
    });
    this.state = {
      tabs: [],
      modal: false,
      project: {
        id: null,
        name: '',
      },
    };
  }

  openModal() {
    this.setState({modal: true});
  }

  closeModal() {
    this.setState({modal: false});
  }

  handleProjectTitle(e) {
    this.setState({project: { 
      id: null,
      name: e.target.value
    }});
  }

  async onCreateProject() {
    const params = {
      id: this.state.project.id,
      name: this.state.project.name,
    }
    const response = await axios.post('/api/project/', params);
    console.log(response);
    axios.get('/api/project').then(({ data }) => {
      console.log(data)
      this.props.onGetProjects(data);
    });
    this.closeModal();
  }

  async onDeleteItem(item) {
    await axios.delete(`/api/lean_canvas/${item.id}`);
    axios.get('/api/lean_canvas').then(({ data }) => {
      this.props.onGetLeanCanvasList(data);
    });
  }

  render() {
    if (!this.props.user.companies) {
      return <Loader />
    }
    const companies = this.props.user.companies.map(company => {
       return <div><Link to={`/company/${company.id}`}>{company.name}</Link></div>
    })

    return (
      <Content>
        <Profile>
          <Name>{this.props.user.username}</Name>
          <BtnCreate onClick={this.openModal.bind(this)}>Create Project</BtnCreate>
        </Profile>
        {/* { companies.map(company => company ) } */}

        <List>
          {this.props.projects.list.map((value, index) => (
            <Item type='lean_canvas' deleteItem={this.onDeleteItem.bind(this)} value={value} key={index} />
          ))}
        </List>

        <Modal
          isOpen={this.state.modal}
          onRequestClose={this.closeModal.bind(this)}
          style={ModalStyles}
          contentLabel="Example Modal">
          <ModalInner>
            <Input type='text' value={this.state.project.name} onChange={this.handleProjectTitle.bind(this)} placeholder='Awesome Project' />
            <Btn type='text' onClick={ this.onCreateProject.bind(this) }>Create</Btn>
          </ModalInner>
        </Modal>
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
        <ListItemAnchor to={`/project/${this.props.value.id}`}>
          <ListItemTitle>{this.props.value.name}</ListItemTitle>
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


const Btn = styled.a`
  font-family: 'Raleway', sans-serif;
  padding: 6px 15px 5px;
  font-size: 12px;
  text-decoration: none;
  color: #fff;
  background-color: #369efb;
  border-radius: 13px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #2a85d7;
  }
`;

const BtnCreate = styled(Btn)`
  position: absolute;
  top: 10px;
  right: 0;
`;

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
  margin: 80px auto 0;
`;

const Profile = styled.div`
  position: relative;
  margin-bottom: 40px;
`;

const Name = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  border-top: 3px solid #f1f1f1;
`;

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

const ModalInner = styled.div`
  width: 480px;
`;

const Input = styled.input`
  width: 392px;

  &::placeholder {
    color: #bebebe;
  }
`;

export default Top

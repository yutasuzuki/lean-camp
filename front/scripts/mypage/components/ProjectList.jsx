import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoIosMore } from 'react-icons/io';
import { ReactModal, ReactModalInner, ReactModalBtnContainer } from '../shared/ReactModal';
import { BtnPrimary, BtnCancel, BtnDelete } from '../shared/Btn';
import { TextStrong } from '../shared/Text';
import Loader from './Loader';


class ProjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      deleteModal: false,
      editModal: false,
      name: '',
    }
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    // this.setState({ name: this.props.value.name });
  }

  onShowMenu(e) {
    this.props.selectProject(this.props.value.id);
    this.setState({show: !this.state.show});
  }

  onCloseMenu() {
    this.setState({show: false});
  }

  onShowEditModal() {
    this.setState({show: false});
    this.setState({editModal: true});
  }

  onCloseEditModal() {
    this.setState({editModal: false});
  }

  onEditProjectName(e) {
    this.props.editProjectName(e.target.value);
  }

  onUpdateProjectName() {
    const params = {
      id: this.props.value.id,
      name: this.props.projects.item.name,
    };
    this.props.updateProjectName(params);
    this.setState({editModal: false});
  }

  onClickShare() {
    console.log('Share');
  }

  onClickDelete() {
    this.setState({show: false});
    this.props.deleteProject({ type: this.props.type, id: this.props.value.id });
    this.setState({deleteModal: false});
  }

  onShowDeleteModal() {
    this.setState({show: false});
    this.setState({deleteModal: true});
  }

  onCloseDeleteModal() {
    this.setState({deleteModal: false});
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
              <MenuShare onClick={this.onShowEditModal.bind(this)}>Edit</MenuShare>
            </MenuItem>
            <MenuItem>
              <MenuShare onClick={this.onClickShare.bind(this)}>SHARE</MenuShare>
            </MenuItem>
            <MenuItem>
              <MenuDelete onClick={this.onShowDeleteModal.bind(this)}>DELETE</MenuDelete>
            </MenuItem>
          </Menu>
          <ListItemMenuOverlay onClick={this.onCloseMenu.bind(this)} className={this.state.show ? 'is-show': ''}/>
        </ListItemMenu>

        <ReactModal
          isOpen={this.state.editModal}
          onRequestClose={this.onCloseEditModal.bind(this)}
          contentLabel="Create Project Modal">
          <ReactModalInner>
            <Input type='text' onChange={this.onEditProjectName.bind(this)} placeholder='Awesome Project' />
            <BtnPrimary type='text' onClick={ this.onUpdateProjectName.bind(this) }>UPDATE</BtnPrimary>
          </ReactModalInner>
        </ReactModal>

        <ReactModal
          isOpen={this.state.deleteModal}
          onRequestClose={this.onCloseDeleteModal.bind(this)}
          contentLabel="Delete Modal">
          <ReactModalInner>
            <div>
              <p><TextStrong>{this.props.value.name}</TextStrong>を削除してもよろしいですか？</p>
            </div>
            <ReactModalBtnContainer>
              <BtnCancel type='text' onClick={this.onCloseDeleteModal.bind(this)}>CANCEL</BtnCancel>
              <BtnDelete type='text' onClick={this.onClickDelete.bind(this)}>DELETE</BtnDelete>
            </ReactModalBtnContainer>
          </ReactModalInner>
        </ReactModal>
      </ListItem>
    )
  }
}

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
  z-index: 2;

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

const ListItemMenuOverlay = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;

  &.is-show {
    display: block;
  }
`;

const Input = styled.input`
  width: 392px;

  &::placeholder {
    color: #bebebe;
  }
`;

export default ProjectList;

import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ReactModal, ReactModalInner } from '../shared/ReactModal';
import { BtnPrimary } from '../shared/Btn';
import ProjectList from '../containers/ProjectList';
import Loader from './Loader';

class Top extends Component {
  constructor(props) {
    super(props);
    props.fetchUser();
    props.fetchProjects();
    this.state = {
      modal: false,
      project: {
        id: null,
        name: '',
      },
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.projects.error.status) {
      console.error('!! ERROR !!');
    }
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
    this.props.createProject(params);
    this.closeModal();
  }

  async onDeleteProject(item) {
    await axios.delete(`/api/project/${item.id}`);
    this.props.fetchProjects();
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
          {this.props.projects.list.map((value, index) => {
            return <ProjectList deleteProject={this.onDeleteProject.bind(this)} value={value} key={index} />
          })}
        </List>

        <ReactModal
          isOpen={this.state.modal}
          onRequestClose={this.closeModal.bind(this)}
          contentLabel='Create Project Modal'>
          <ReactModalInner>
            <Input type='text' value={this.state.project.name} onChange={this.handleProjectTitle.bind(this)} placeholder='Awesome Project' />
            <BtnPrimary type='text' onClick={ this.onCreateProject.bind(this) }>Create</BtnPrimary>
          </ReactModalInner>
        </ReactModal>
      </Content>
    )
  }
}

const BtnCreate = styled(BtnPrimary)`
  position: absolute;
  top: 10px;
  right: 0;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  border-top: 3px solid #f1f1f1;
`;

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

const Input = styled.input`
  width: 392px;

  &::placeholder {
    color: #bebebe;
  }
`;

export default Top

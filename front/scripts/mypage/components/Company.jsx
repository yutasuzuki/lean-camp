import React, { Component } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';

class CompanyComponent extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)

    this.state = {
      company: {
        id: null
      }
    }
  }

  async componentWillMount() {
    const id = this.props.match.params.id;
    const response = await axios.get('/api/company', { params: { id }}).catch((err) => {
      this.props.history.push('/');
    });
    if (response) {
      this.setState({ company: response.data });
    }
  }

  render() {
    return (
      <div>
        <h1>Company</h1>
        <div>
          <div>{ this.state.company.name }</div>
          <div>{ this.state.company.zipcode }</div>
          <div>{ this.state.company.address }</div>
          <div>{ this.state.company.tel }</div>
        </div>
        <div>
          <div>Add Member</div>
          <input type='text' />
        </div>
      </div>
    )
  }
}

export default CompanyComponent
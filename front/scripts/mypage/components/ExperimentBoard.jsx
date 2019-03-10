import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import axios from 'axios';
import TextareaAutoHeight from './TextareaAutoHeight';
import { IoIosArrowBack } from 'react-icons/io';

class ExperimentBoard extends Component {
  constructor(props) {
    super(props);
    this.state  = {
      id: null,
      project_id: Number(this.props.match.params.project_id), 
      problem: '',
      solution: '',
      unique_value: '',
      advantage: '',
      customer_segments: '',
      existing: '',
      key_metrics: '',
      concept: '',
      channels: '',
      early_adopter: '',
      cost: '',
      revenue: '',
      service_name: '',
      loaded: false,
    }
  }

  componentDidMount() {
    // TODO: ここの処理はReduxに写す
    if (this.props.match.params.project_id) {
      axios.get(`/api/lean_canvas/${this.props.match.params.project_id}`).then(({ data }) => {
        console.log(data);
        const state = Object.assign({}, data, { loaded: true });
        this.setState(state);
      });
    } else {
      this.setState({ loaded: true });
    }
  }

  onChangeHandler(e) {
    const key = e.target.getAttribute('name');
    this.setState({[key]: e.target.value});
  }

  onChangeTitle(e) {
    this.setState({'service_name': e.target.value});
  }

  onSave() {
    axios.post('/api/lean_canvas', this.state).then(({ data }) => {
      const state = Object.assign({}, data, { loaded: true });
      this.setState(state);
      toast.success('保存しました', {
        position: 'top-right',
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
      });
    });
  }

  render() {
    if (!this.state.loaded) {
      return (
        <div>ローデング</div>
      )
    }
    return (
      <div>
        <div className='c-experiment-board'>
          <div className='c-experiment-board__title c-experiment-board__title--half'>
            <p className='c-experiment-board__subtitle'>既存の代替品</p>
          </div>
          <div className='c-experiment-board__title c-experiment-board__title--0'>
            <h3 className='c-experiment-board__title'>experiment</h3>
          </div>
          <div className='c-experiment-board__title c-experiment-board__title--1'>
            <h3 className='c-experiment-board__title'>1</h3>
          </div>
          <div className='c-experiment-board__title c-experiment-board__title--2'>
            <h3 className='c-experiment-board__title'>2</h3>
          </div>
          <div className='c-experiment-board__title c-experiment-board__title--3'>
            <h3 className='c-experiment-board__title'>3</h3>
          </div>
          <div className='c-experiment-board__title c-experiment-board__title--4'>
            <h3 className='c-experiment-board__title'>4</h3>
          </div>
          <div className='c-experiment-board__title c-experiment-board__title--5'>
            <h3 className='c-experiment-board__title'>5</h3>
          </div>
          <div className='c-experiment-board__cell c-experiment-board__cell--customer'>
            <Textarea 
              name='channels' 
              changeTextarea={this.onChangeHandler.bind(this)} 
              text={this.state.channels} 
              className='c-experiment-board__textarea' 
            />
          </div>
          <div className='c-experiment-board__title c-experiment-board__title--customer'>
            <p className='c-experiment-board__subtitle'>CUSTOMER</p>
          </div>
          <div className='c-experiment-board__cell c-experiment-board__cell--customer-1'>
            <Textarea 
              name='channels' 
              changeTextarea={this.onChangeHandler.bind(this)} 
              text={this.state.channels} 
              className='c-experiment-board__textarea' 
            />
          </div>
          <div className='c-experiment-board__cell c-experiment-board__cell--customer-2'>
            <Textarea 
              name='channels' 
              changeTextarea={this.onChangeHandler.bind(this)} 
              text={this.state.channels} 
              className='c-experiment-board__textarea' 
            />
          </div>
          <div className='c-experiment-board__cell c-experiment-board__cell--customer-3'>
            <Textarea 
              name='channels' 
              changeTextarea={this.onChangeHandler.bind(this)} 
              text={this.state.channels} 
              className='c-experiment-board__textarea' 
            />
          </div>
          <div className='c-experiment-board__cell c-experiment-board__cell--customer-4'>
            <Textarea 
              name='channels' 
              changeTextarea={this.onChangeHandler.bind(this)} 
              text={this.state.channels} 
              className='c-experiment-board__textarea' 
            />
          </div>
          <div className='c-experiment-board__cell c-experiment-board__cell--customer-5'>
            <Textarea 
              name='channels' 
              changeTextarea={this.onChangeHandler.bind(this)} 
              text={this.state.channels} 
              className='c-experiment-board__textarea' 
            />
          </div>

          <div className='c-experiment-board__cell c-experiment-board__cell--problem'>
            <Textarea 
              name='channels' 
              changeTextarea={this.onChangeHandler.bind(this)} 
              text={this.state.channels} 
              className='c-experiment-board__textarea' 
            />
          </div>
          <div className='c-experiment-board__title c-experiment-board__title--problem'>
            <p className='c-experiment-board__subtitle'>PROBLEM</p>
          </div>
          <div className='c-experiment-board__cell c-experiment-board__cell--problem-1'>
            <Textarea 
              name='channels' 
              changeTextarea={this.onChangeHandler.bind(this)} 
              text={this.state.channels} 
              className='c-experiment-board__textarea' 
            />
          </div>
          <div className='c-experiment-board__cell c-experiment-board__cell--problem-2'>
            <Textarea 
              name='channels' 
              changeTextarea={this.onChangeHandler.bind(this)} 
              text={this.state.channels} 
              className='c-experiment-board__textarea' 
            />
          </div>
          <div className='c-experiment-board__cell c-experiment-board__cell--problem-3'>
            <Textarea 
              name='channels' 
              changeTextarea={this.onChangeHandler.bind(this)} 
              text={this.state.channels} 
              className='c-experiment-board__textarea' 
            />
          </div>
          <div className='c-experiment-board__cell c-experiment-board__cell--problem-4'>
            <Textarea 
              name='channels' 
              changeTextarea={this.onChangeHandler.bind(this)} 
              text={this.state.channels} 
              className='c-experiment-board__textarea' 
            />
          </div>
          <div className='c-experiment-board__cell c-experiment-board__cell--problem-5'>
            <Textarea 
              name='channels' 
              changeTextarea={this.onChangeHandler.bind(this)} 
              text={this.state.channels} 
              className='c-experiment-board__textarea' 
            />
          </div>

          <div className='c-experiment-board__cell c-experiment-board__cell--solution'>
            <Textarea 
              name='channels' 
              changeTextarea={this.onChangeHandler.bind(this)} 
              text={this.state.channels} 
              className='c-experiment-board__textarea' 
            />
          </div>
          <div className='c-experiment-board__title c-experiment-board__title--solution'>
            <p className='c-experiment-board__subtitle'>solution</p>
          </div>
          <div className='c-experiment-board__cell c-experiment-board__cell--solution-1'>
            <Textarea 
              name='channels' 
              changeTextarea={this.onChangeHandler.bind(this)} 
              text={this.state.channels} 
              className='c-experiment-board__textarea' 
            />
          </div>
          <div className='c-experiment-board__cell c-experiment-board__cell--solution-2'>
            <Textarea 
              name='channels' 
              changeTextarea={this.onChangeHandler.bind(this)} 
              text={this.state.channels} 
              className='c-experiment-board__textarea' 
            />
          </div>
          <div className='c-experiment-board__cell c-experiment-board__cell--solution-3'>
            <Textarea 
              name='channels' 
              changeTextarea={this.onChangeHandler.bind(this)} 
              text={this.state.channels} 
              className='c-experiment-board__textarea' 
            />
          </div>
          <div className='c-experiment-board__cell c-experiment-board__cell--solution-4'>
            <Textarea 
              name='channels' 
              changeTextarea={this.onChangeHandler.bind(this)} 
              text={this.state.channels} 
              className='c-experiment-board__textarea' 
            />
          </div>
          <div className='c-experiment-board__cell c-experiment-board__cell--solution-5'>
            <Textarea 
              name='channels' 
              changeTextarea={this.onChangeHandler.bind(this)} 
              text={this.state.channels} 
              className='c-experiment-board__textarea' 
            />
          </div>
        </div>

        <Textarea 
          name='existing' 
          changeTextarea={this.onChangeHandler.bind(this)} 
          text={this.state.existing} 
          className='c-experiment-board__textarea' 
        />
        <FooterSticky>
          <a onClick={this.props.history.goBack.bind(this)}>
            <FooterStickyBack />
          </a>
          <BtnSave onClick={this.onSave.bind(this)}>SAVE</BtnSave>
        </FooterSticky>
        <Toast />
      </div>
    )
  }
}

const Main = styled.main`
  margin: 80px 3vw 152px;
`
const Toast = styled(ToastContainer)`
  color: #fff !important;
`
const FooterSticky = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, .5);
  padding: 12px 3vw;
`

const Textarea = styled(TextareaAutoHeight) `
  width: 100%;
  margin-top: 5px;
  border: 0;
  outline: 0;
  resize: none;
`

const FooterStickyBack = styled(IoIosArrowBack)`
  width: 42px;
  height: 42px;
  fill: #0db5ff;
  cursor: pointer;

  &:hover {
    fill: #2a85d7;
  }
`;

const BtnSave = styled.a`
  font-family: 'Raleway', sans-serif;
  padding: 6px 15px 5px;
  font-size: 12px;
  text-decoration: none;
  color: #fff;
  background-color: #369EFB;
  border-radius: 13px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;

  &:hover {
    background-color: #2a85d7;
  }
`;

export default ExperimentBoard
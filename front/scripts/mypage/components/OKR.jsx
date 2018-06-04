import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import TextareaAutoHeight from './TextareaAutoHeight';

const Textarea = styled(TextareaAutoHeight) `
  width: 100%;
  margin-top: 5px;
  border: 0;
  outline: 0;
  resize: none;
`

class OKR extends Component {
  constructor(props) {
    super(props);
    this.state  = {
      id: null,
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
    if (this.props.match.params.id) {
      axios.get(`/api/lean_canvas/${this.props.match.params.id}`).then(({ data }) => {
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
      <Main>
        <div className='u-flex-row-between'>
          <div className='c-lean-canvas-title'>
            <div className='c-lean-canvas-title__text'>サービス名</div>
            <input
              type='text' 
              onChange={this.onChangeTitle.bind(this)} 
              className='c-lean-canvas-title__input'
              defaultValue={this.state['service_name']}
            />
          </div>
          <div>作成日</div>
        </div>
        <div className='c-okr'>
          <div className='c-okr__cell c-okr__cell--priority'>
            <h3 className='c-lean-canvas__title'>なぜお客様は喜んでくれる？</h3>
            <p className='c-lean-canvas__subtitle'>課題</p>
            <p className='c-lean-canvas__subtitle'>PROBLEM</p>
            <Textarea 
              name='problem' 
              changeTextarea={this.onChangeHandler.bind(this)} 
              text={this.state.problem}
              className='c-lean-canvas__textarea' 
            />
          </div>
          <div className='c-okr__cell c-okr__cell--goal'>
            <h3 className='c-lean-canvas__title'>OKR</h3>
            <p className='c-lean-canvas__subtitle'>Object</p>
            <Textarea 
              name='existing' 
              changeTextarea={this.onChangeHandler.bind(this)} 
              text={this.state.existing} 
              className='c-lean-canvas__textarea' 
            />
            <p className='c-lean-canvas__subtitle'>Key Result</p>
            <Textarea 
              name='existing' 
              changeTextarea={this.onChangeHandler.bind(this)} 
              text={this.state.existing} 
              className='c-lean-canvas__textarea' 
            />
          </div>
          <div className='c-okr__cell c-okr__cell--next'>
            <h3 className='c-lean-canvas__title'>具体的に何を提供する？</h3>
            <p className='c-lean-canvas__subtitle'>ソリューション</p>
            <p className='c-lean-canvas__subtitle'>SOLUTION</p>
            <Textarea 
              name='solution' 
              changeTextarea={this.onChangeHandler.bind(this)} 
              text={this.state.solution} 
              className='c-lean-canvas__textarea' 
            />
          </div>
          <div className='c-okr__cell c-okr__cell--Soundness'>
            <h3 className='c-lean-canvas__title'>喜んだことをどうやって知る？</h3>
            <p className='c-lean-canvas__subtitle'>主要指標</p>
            <p className='c-lean-canvas__subtitle'>KEY METRICS</p>
            <Textarea 
              name='key_metrics' 
              changeTextarea={this.onChangeHandler.bind(this)} 
              text={this.state['key_metrics']} 
              className='c-lean-canvas__textarea' 
            />
          </div>
        </div>
        <div>
          <a onClick={this.onSave.bind(this)} className='c-btn--primary'>保 存</a>
        </div>
      </Main>
    )
  }
}

const Main = styled.main`
  margin: 120px 3vw 152px;
`

export default OKR
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
      open: false,
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

  onHoge() {
    this.setState({ open: true });
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
            <h3 className='c-lean-canvas__title'>今週</h3>
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

            <div className={[
              'c-input-add',
              this.state.open ? 'is-open' : ''
            ].join(' ')}>
              <div className='c-input-add-inner'>
                <input />
              </div>
              <div onClick={this.onHoge.bind(this)} className='c-input-add__btn'></div>
            </div>

            <p className='c-lean-canvas__subtitle'>Key Result</p>
            <input />
          </div>
          <div className='c-okr__cell c-okr__cell--next'>
            <h3 className='c-lean-canvas__title'>今後４週間 - プロジェクト</h3>
            <Textarea 
              name='solution' 
              changeTextarea={this.onChangeHandler.bind(this)} 
              text={this.state.solution} 
              className='c-lean-canvas__textarea' 
            />
          </div>
          <div className='c-okr__cell c-okr__cell--Soundness'>
            <h3 className='c-lean-canvas__title'>健康状態・健全性</h3>
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
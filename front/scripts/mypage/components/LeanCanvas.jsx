import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import axios from 'axios';
import TextareaAutoHeight from './TextareaAutoHeight';
import { IoIosArrowBack } from 'react-icons/io';

const Textarea = styled(TextareaAutoHeight) `
  width: 100%;
  margin-top: 5px;
  border: 0;
  outline: 0;
  resize: none;
`

class LeanCanvas extends Component {
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
        <div className='c-lean-canvas'>
          <div className='c-lean-canvas__cell c-lean-canvas__cell--problem'>
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
          <div className='c-lean-canvas__cell c-lean-canvas__cell--existing'>
            <p className='c-lean-canvas__subtitle'>既存の代替品</p>
            <p className='c-lean-canvas__subtitle'>EXISTING ALTERNATIVES</p>
            <Textarea 
              name='existing' 
              changeTextarea={this.onChangeHandler.bind(this)} 
              text={this.state.existing} 
              className='c-lean-canvas__textarea' 
            />
          </div>
          <div className='c-lean-canvas__cell c-lean-canvas__cell--solution'>
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
          <div className='c-lean-canvas__cell c-lean-canvas__cell--key-metrics'>
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
          <div className='c-lean-canvas__cell c-lean-canvas__cell--unique-value'>
            <h3 className='c-lean-canvas__title'>なぜお客様は我々から買いたくなる？</h3>
            <p className='c-lean-canvas__subtitle'>独自の価値提案</p>
            <p className='c-lean-canvas__subtitle'>UNIQUE VALUE PROPOSITION</p>
            <Textarea 
              name='unique_value' 
              changeTextarea={this.onChangeHandler.bind(this)} 
              text={this.state['unique_value']} 
              className='c-lean-canvas__textarea' 
            />
          </div>
          <div className='c-lean-canvas__cell c-lean-canvas__cell--concept'>
            <p className='c-lean-canvas__subtitle'>わかりやすいコンセプト</p>
            <p className='c-lean-canvas__subtitle'>HIGH-LEVEL CONCEPT</p>
            <Textarea 
              name='concept' 
              changeTextarea={this.onChangeHandler.bind(this)} 
              text={this.state.concept} 
              className='c-lean-canvas__textarea' 
            />
          </div>
          <div className='c-lean-canvas__cell c-lean-canvas__cell--advantage'>
            <h3 className='c-lean-canvas__title'>なぜ我々は喜ばせることができる？</h3>
            <p className='c-lean-canvas__subtitle'>圧倒的な優位性</p>
            <p className='c-lean-canvas__subtitle'>UNFAIR ADVANTAGE</p>
            <Textarea 
              name='advantage' 
              changeTextarea={this.onChangeHandler.bind(this)} 
              text={this.state.advantage} 
              className='c-lean-canvas__textarea' 
            />
          </div>
          <div className='c-lean-canvas__cell c-lean-canvas__cell--channels'>
            <h3 className='c-lean-canvas__title'>どうやってコミュニケーションする？</h3>
            <p className='c-lean-canvas__subtitle'>チャネル</p>
            <p className='c-lean-canvas__subtitle'>CHANNELS</p>
            <Textarea 
              name='channels' 
              changeTextarea={this.onChangeHandler.bind(this)} 
              text={this.state.channels} 
              className='c-lean-canvas__textarea' 
            />
          </div>
          <div className='c-lean-canvas__cell c-lean-canvas__cell--customer-segments'>
            <h3 className='c-lean-canvas__title'>誰に喜んでほしい？</h3>
            <p className='c-lean-canvas__subtitle'>顧客セグメント</p>
            <p className='c-lean-canvas__subtitle'>CUSTOMER SEGMENTS</p>
            <Textarea 
              name='customer_segments' 
              changeTextarea={this.onChangeHandler.bind(this)} 
              text={this.state['customer_segments']} 
              className='c-lean-canvas__textarea' 
            />
          </div>
          <div className='c-lean-canvas__cell c-lean-canvas__cell--early-adopter'>
            <p className='c-lean-canvas__subtitle'>アーリーアダプター</p>
            <p className='c-lean-canvas__subtitle'>EARLY ADOPTERS</p>
            <Textarea 
              name='early_adopter' 
              changeTextarea={this.onChangeHandler.bind(this)} 
              text={this.state['early_adopter']} 
              className='c-lean-canvas__textarea' 
            />
          </div>
          <div className='c-lean-canvas__cell c-lean-canvas__cell--cost'>
            <h3 className='c-lean-canvas__title'>コストはどれくらいかかる？</h3>
            <p className='c-lean-canvas__subtitle'>コスト構造</p>
            <p className='c-lean-canvas__subtitle'>COST STRUCTURE</p>
            <Textarea 
              name='cost' 
              changeTextarea={this.onChangeHandler.bind(this)} 
              text={this.state.cost} 
              className='c-lean-canvas__textarea' 
            />
          </div>
          <div className='c-lean-canvas__cell c-lean-canvas__cell--revenue'>
            <h3 className='c-lean-canvas__title'>結果として我々には何がもたらされる？</h3>
            <p className='c-lean-canvas__subtitle'>収入の流れ</p>
            <p className='c-lean-canvas__subtitle'>REVENUE STREAMS</p>
            <Textarea 
              name='revenue' 
              changeTextarea={this.onChangeHandler.bind(this)} 
              text={this.state.revenue} 
              className='c-lean-canvas__textarea' 
            />
          </div>
        </div>
        <FooterSticky>
          <a onClick={this.props.history.goBack.bind(this)}>
            <FooterStickyBack />
          </a>
          <BtnSave onClick={this.onSave.bind(this)} className='c-btn--primary'>SAVE</BtnSave>
        </FooterSticky>
        <Toast />
      </Main>
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
  padding: 24px 3vw;
`

const FooterStickyBack = styled(IoIosArrowBack)`
  width: 50px;
  height: 50px;
  fill: #0db5ff;
  cursor: pointer;

  &:hover {
    fill: #2a85d7;
  }
`;

const BtnSave = styled.a`
  font-family: 'Quicksand', sans-serif;
  display: inline-block;
  color: #fff;
  text-align: center;
  text-decoration: none;
  padding: 8px 32px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(54, 158, 251);
  border-image: initial;
  border-radius: 8px;
  font-weight: bold;
  font-size: 20px;
  transition: all 0.1s ease-in 0s;
  letter-spacing: .25em;
  cursor: pointer;

  &:hover {
    background-color: #2a85d7;
  }
`;

export default LeanCanvas
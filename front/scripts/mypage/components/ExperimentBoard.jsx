import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import axios from 'axios';
import TextareaAutoHeight from './TextareaAutoHeight';
import Loader from './Loader';
import { IoIosArrowBack } from 'react-icons/io';

class ExperimentBoard extends Component {
  constructor(props) {
    super(props);
    this.state  = {
      id: null,
      project_id: Number(this.props.match.params.project_id), 
      customer: '',
      customer_1: '', customer_2: '', customer_3: '', customer_4: '', customer_5: '',
      problem: '',
      problem_1: '', problem_2: '', problem_3: '', problem_4: '', problem_5: '',
      solution: '',
      solution_1: '', solution_2: '', solution_3: '', solution_4: '', solution_5: '',
      precondition: '',
      precondition_1: '', precondition_2: '', precondition_3: '', precondition_4: '', precondition_5: '',
      method_1: '', method_2: '', method_3: '', method_4: '', method_5: '',
      result_1: '', result_2: '', result_3: '', result_4: '', result_5: '',
      learn_1: '', learn_2: '', learn_3: '', learn_4: '', learn_5: '',
      loaded: false,
    }
  }

  componentDidMount() {
    // TODO: ここの処理はReduxに写す
    this.setState({ loaded: true });
  }

  onChangeHandler(e) {
    const key = e.target.getAttribute('name');
    this.setState({[key]: e.target.value});
  }

  onSave() {
    // axios.post('/api/lean_canvas', this.state).then(({ data }) => {
    //   const state = Object.assign({}, data, { loaded: true });
    //   this.setState(state);
    //   toast.success('保存しました', {
    //     position: 'top-right',
    //     autoClose: 4000,
    //     hideProgressBar: true,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //   });
    // });
  }

  render() {
    if (!this.state.loaded) {
      return (
        <Loader />
      )
    }
    return (
      <div>
        <div className='c-experiment-board'>
          <div className='c-experiment-board__title c-experiment-board__title--half'>
            <h3 className='c-experiment-board__title'>ブレストをはじめましょう！実験を始めるには右に移動させます。</h3>
          </div>
          <div className='c-experiment-board__title c-experiment-board__title--0'>
            <h3 className='c-experiment-board__title'>実験</h3>
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
            <h3>あなたの顧客は具体的には誰ですか？</h3>
            <Textarea 
              name='customer' 
              changeTextarea={this.onChangeHandler.bind(this)} 
              text={this.state.customer} 
              className='c-experiment-board__textarea' 
            />
          </div>
          <div className='c-experiment-board__title c-experiment-board__title--customer'>
            <p className='c-experiment-board__title'>顧客</p>
          </div>
          
          {[...Array(5)].map((customer, index) => {
            const className = `c-experiment-board__cell c-experiment-board__cell--customer-${index + 1}`;
            const name = `customer_${index + 1}`;
            return (
              <div className={className}>
                <Textarea 
                  name={name}
                  changeTextarea={this.onChangeHandler.bind(this)} 
                  text={this.state[name]} 
                  className='c-experiment-board__textarea' 
                />
              </div>
            )
          })}

          <div className='c-experiment-board__cell c-experiment-board__cell--problem'>
            <h3>顧客視点での問題は何ですか？</h3>
            <Textarea 
              name='problem' 
              changeTextarea={this.onChangeHandler.bind(this)} 
              text={this.state.problem} 
              className='c-experiment-board__textarea' 
            />
          </div>
          <div className='c-experiment-board__title c-experiment-board__title--problem'>
            <p className='c-experiment-board__title'>問題</p>
          </div>
          {[...Array(5)].map((problem, index) => {
            const className = `c-experiment-board__cell c-experiment-board__cell--problem-${index + 1}`;
            const name = `problem_${index + 1}`;
            return (
              <div className={className}>
                <Textarea 
                  name={name}
                  changeTextarea={this.onChangeHandler.bind(this)} 
                  text={this.state[name]} 
                  className='c-experiment-board__textarea' 
                />
              </div>
            )
          })}

          <div className='c-experiment-board__cell c-experiment-board__cell--solution'>
            <h3>解決する価値を見出した上で、解決策を考えましょう！</h3>
            <Textarea 
              name='solution' 
              changeTextarea={this.onChangeHandler.bind(this)} 
              text={this.state.solution} 
              className='c-experiment-board__textarea' 
            />
          </div>
          <div className='c-experiment-board__title c-experiment-board__title--solution'>
            <p className='c-experiment-board__title'>解決策</p>
          </div>
          {[...Array(5)].map((solution, index) => {
            const className = `c-experiment-board__cell c-experiment-board__cell--solution-${index + 1}`;
            const name = `solution_${index + 1}`;
            return (
              <div className={className}>
                <Textarea 
                  name={name}
                  changeTextarea={this.onChangeHandler.bind(this)} 
                  text={this.state[name]} 
                  className='c-experiment-board__textarea' 
                />
              </div>
            )
          })}

          <div className='c-experiment-board__cell c-experiment-board__cell--precondition'>
            <h3>仮説の正しさを実証できる前提となっているものをリストアップしましょう！</h3>
            <Textarea 
              name='precondition' 
              changeTextarea={this.onChangeHandler.bind(this)} 
              text={this.state.precondition} 
              className='c-experiment-board__textarea' 
            />
          </div>
          <div className='c-experiment-board__title c-experiment-board__title--precondition'>
            <p className='c-experiment-board__title'>最も問題<br />なのは</p>
          </div>
          {[...Array(5)].map((precondition, index) => {
            const className = `c-experiment-board__cell c-experiment-board__cell--precondition-${index + 1}`;
            const name = `precondition_${index + 1}`;
            return (
              <div className={className}>
                <Textarea 
                  name={name}
                  changeTextarea={this.onChangeHandler.bind(this)} 
                  text={this.state[name]} 
                  className='c-experiment-board__textarea' 
                />
              </div>
            )
          })}

          <div className='c-experiment-board__title c-experiment-board__title--helper'>
            <h3 className='c-experiment-board__title'>実験を構築するために以下の文章が使用できます。</h3>
          </div>

          <div className='c-experiment-board__title c-experiment-board__title--method'>
            <p className='c-experiment-board__title'>方法<br />&<br />達成基準</p>
          </div>
          {[...Array(5)].map((method, index) => {
            const className = `c-experiment-board__cell c-experiment-board__cell--method-${index + 1}`;
            const name = `method_${index + 1}`;
            return (
              <div className={className}>
                <Textarea 
                  name={name}
                  changeTextarea={this.onChangeHandler.bind(this)} 
                  text={this.state[name]} 
                  className='c-experiment-board__textarea' 
                />
              </div>
            )
          })}

          <div className='c-experiment-board__title c-experiment-board__title--go-out'>
            <h3 className='c-experiment-board__title'>ビルの外に飛び出そう！</h3>
          </div>

          <div className='c-experiment-board__cell c-experiment-board__cell--helper-1'>
            <p className='c-experiment-board__lead'>顧客/問題の仮説を形成するために：</p>
            <p className='c-experiment-board__text'>私は私の顧客がこの目標を達成するために、問題があると考えています。</p>
          </div>

          <div className='c-experiment-board__cell c-experiment-board__cell--helper-2'>
            <p className='c-experiment-board__lead'>問題/解決策の仮説を形成するために：</p>
            <p className='c-experiment-board__text'>私はこの解決策が、定量化できる結果をもたらすと考えています。</p>
          </div>

          <div className='c-experiment-board__cell c-experiment-board__cell--helper-3'>
            <p className='c-experiment-board__lead'>あなたの仮説を形成するには：</p>
            <p className='c-experiment-board__text'>仮説が正しいとわかるために、仮定が正しい必要があります。</p>
          </div>

          <div className='c-experiment-board__cell c-experiment-board__cell--helper-4'>
            <p className='c-experiment-board__lead'>最もリスクの高い仮説を限定するために：</p>
            <p className='c-experiment-board__text'>私の仮説立証にデータ量、コアとの仮定があります。？？？？</p>
          </div>

          <div className='c-experiment-board__cell c-experiment-board__cell--helper-5'>
            <p className='c-experiment-board__lead'>テスト方法を決定するために：</p>
            <p className='c-experiment-board__text'>仮説をテストするために最も簡単な方法を設定します。</p>
          </div>

          <div className='c-experiment-board__cell c-experiment-board__cell--helper-6'>
            <p className='c-experiment-board__lead'>成功の可視化のために：</p>
            <p className='c-experiment-board__text'>私は顧客を〇〇でテストして、顧客が□□になることを期待します。</p>
          </div>

          <div className='c-experiment-board__title c-experiment-board__title--result'>
            <p className='c-experiment-board__title'>結果<br />&<br />決定</p>
          </div>
          {[...Array(5)].map((result, index) => {
            const className = `c-experiment-board__cell c-experiment-board__cell--result-${index + 1}`;
            const name = `result_${index + 1}`;
            return (
              <div className={className}>
                <Textarea 
                  name={name}
                  changeTextarea={this.onChangeHandler.bind(this)} 
                  text={this.state[name]} 
                  className='c-experiment-board__textarea' 
                />
              </div>
            )
          })}

          <div className='c-experiment-board__title c-experiment-board__title--learn'>
            <p className='c-experiment-board__title'>学習</p>
          </div>
          {[...Array(5)].map((learn, index) => {
            const className = `c-experiment-board__cell c-experiment-board__cell--learn-${index + 1}`;
            const name = `learn_${index + 1}`;
            return (
              <div className={className}>
                <Textarea 
                  name={name}
                  changeTextarea={this.onChangeHandler.bind(this)} 
                  text={this.state[name]}
                  className='c-experiment-board__textarea' 
                />
              </div>
            )
          })}
        </div>

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
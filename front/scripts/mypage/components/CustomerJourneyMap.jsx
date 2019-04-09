import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import TextareaAutoHeight from './TextareaAutoHeight';
import Loader from './Loader';
import { IoIosArrowBack } from 'react-icons/io';

class CustomerJourneyMap extends Component {
  constructor(props) {
    super(props);
    const a = {
      feeling: {
        score: 0,
        text: 'hoge',
      },
      thinking: '',
      doing: '',
      touchpoint: '',
    };
    this.state  = {
      id: null,
      project_id: Number(this.props.match.params.project_id),
      data: [a, a, a, a, a, a, a, a, a, a, a, a],
      loaded: false,
    }
  }

  componentDidMount() {
    this.setState({ loaded: true });
  }

  onChangeHandler(e) {
    // const key = e.target.getAttribute('name');
    // this.setState({[key]: e.target.value});
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
      return <Loader />
    }

    return (
      <ContentScroller>
        <table class='c-customer-journey-map'>
          <tr>
            <th>FEELING</th>
            {this.state.data.map((value, index) => {
              return (
              <td class='c-customer-journey-map__feeling'>
                <TextareaAutoHeight
                  className='c-customer-journey-map__textarea'
                  changeTextarea={this.onChangeHandler.bind(this)} 
                  text={value.feeling.text}
                />
              </td>
              )
            })}
          </tr>
          <tr>
            <th>THINKING</th>
            {this.state.data.map((value, index) => {
              return (
              <td class='c-customer-journey-map__thinking'>
                <TextareaAutoHeight
                  className='c-customer-journey-map__textarea'
                  changeTextarea={this.onChangeHandler.bind(this)} 
                  text={value.thinking}
                />
              </td>
              )
            })}
          </tr>
          <tr>
            <th>DOING</th>
            {this.state.data.map((value, index) => {
              return (
              <td class='c-customer-journey-map__doing'>
                <TextareaAutoHeight
                  className='c-customer-journey-map__textarea'
                  changeTextarea={this.onChangeHandler.bind(this)}
                  text={value.doing}
                />
              </td>
              )
            })}
          </tr>
          <tr>
            <th>TOUCHPOINT</th>
            {this.state.data.map((value, index) => {
              return (
              <td class='c-customer-journey-map__touch-point'>
                <TextareaAutoHeight
                  className='c-customer-journey-map__textarea'
                  changeTextarea={this.onChangeHandler.bind(this)}
                  text={value.touchpoint}
                />
              </td>
              )
            })}
          </tr>
          <tr>
            <th>TOUCHPOINT</th>
            {this.state.data.map((value, index) => {
              return (
              <td class='c-customer-journey-map__label'></td>
              )
            })}
          </tr>
        </table>
        <FooterSticky>
          <a onClick={this.props.history.goBack.bind(this)}>
            <FooterStickyBack />
          </a>
          <BtnSave onClick={this.onSave.bind(this)}>SAVE</BtnSave>
        </FooterSticky>
        <Toast />
      </ContentScroller>
    )
  }
}

const ContentScroller = styled.div`
  overflow-x: auto;
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

export default CustomerJourneyMap
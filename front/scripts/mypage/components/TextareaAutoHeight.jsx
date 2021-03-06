import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

class TextareaAutoHeight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
    };
  }

  componentDidMount() {
    const textarea = findDOMNode(this.refs.textarea);
    textarea.addEventListener('change', this.textAutoHeightHandler);
    textarea.addEventListener('input', this.textAutoHeightHandler);
    this.textAutoHeightHandler.call(textarea);
  }

  componentWillUnmount() {
    const textarea = findDOMNode(this.refs.textarea);
    textarea.removeEventListener('change', this.textAutoHeightHandler);
    textarea.removeEventListener('input', this.textAutoHeightHandler);
  }

  textAutoHeightHandler() {
    this.style.height = '144px';
    const lineHeight = parseInt(this.style.lineHeight.replace(/px/, ''));
    const doubleLineHeight = lineHeight * 2;
    let scrollHeight = parseInt(this.scrollHeight);
    if(scrollHeight < doubleLineHeight){
      scrollHeight = doubleLineHeight;
    }
    this.style.height = `${scrollHeight}px`;
  }


  render() {
    return (
      <textarea 
        ref='textarea'
        name={this.props.name}
        className={this.props.className} 
        onChange={this.props.changeTextarea.bind(this)}
        defaultValue={this.state.text}
      />
    )
  }
}

export default TextareaAutoHeight;

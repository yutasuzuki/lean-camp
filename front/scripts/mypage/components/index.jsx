import React, { Component } from 'react'

class AwesomeComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div onClick={this.props.onClickHandler}>Awesome Project</div>
    )
  }
}

export default AwesomeComponent
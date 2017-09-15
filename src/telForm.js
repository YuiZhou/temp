import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FormControl, Button } from 'react-bootstrap';
import './App.css';

class TelForm extends Component {
  constructor(props) {
    super(props);
    this.formHandler = this.formHandler.bind(this);
  }

  formHandler() {
    const { onSubmit } = this.props;
    onSubmit(ReactDOM.findDOMNode(this.refs.tel).value);
  }

  render() {
    return (
      <div>
          <FormControl type='text' placeholder='你的手机号码' ref='tel'/>
          <Button onClick={this.formHandler} bsStyle="info" className='submit'>提交</Button>
      </div>
    );
  }
}

export default TelForm;
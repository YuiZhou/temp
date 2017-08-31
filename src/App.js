import React, { Component } from 'react';
import './App.css';
import TelForm from './telForm.js';
import dataFactory from './dataFactory.js';
import { Table, PageHeader } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '明知我命太好，那么多工作做<br/>--容祖儿《与猫共舞》'
    };
    this.show = this.show.bind(this);
  }

  show(tel) {
    this.setState(function() {
      return {
        data: dataFactory.find(tel)
      }
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <PageHeader>容祖儿银河护卫队 MY.SECRET.LIVE DVD团购查询</PageHeader>
        <TelForm onSubmit = {this.show}/>
        <br/>
        {
          (data['电话1'] || data['电话2']) ? 
            <Table>
              <tbody>
                <tr>
                  <td>姓名</td>
                  <td>{data['姓名']}</td>
                </tr>
                <tr>
                  <td>快递单号</td>
                  <td>{data['快递单号']}</td>
                </tr>
                <tr>
                  <td>DVD数量</td>
                  <td>{data['容祖儿DVD']}</td>
                </tr>
              </tbody>
            </Table>
          : <p>{data}</p>
        } 
      </div>
    );
  }
}

export default App;

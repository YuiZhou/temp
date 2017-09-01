import React, { Component } from 'react';
import './App.css';
import TelForm from './telForm.js';
import dataFactory from './dataFactory.js';
import { Table, PageHeader } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
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
          <div>
           <p><em>所有快递都由申通快递发出</em></p>
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
            </div>
          : <p>{data}</p>
        }
        <br/>
        <br/>
        <br/>
        <hr/>
        <p>巴不得我四季放暑假<br/><sub>--容祖儿《全身暑假》</sub></p>
      </div>
    );
  }
}

export default App;

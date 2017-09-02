import React, { Component } from 'react';
import './App.css';
import TelForm from './telForm.js';
import dataFactory from './dataFactory.js';
import { Table, PageHeader, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    var tel = this.getTel();
    this.state = {
      data: tel ? dataFactory.find(tel) : ''
    };
    this.show = this.show.bind(this);
    this.track = this.track.bind(this);
  }

  getTel() {
    return localStorage.getItem('tel') || '';
  }

  setTel(tel) {
    localStorage.setItem('tel', tel);
  }

  show(tel) {
    this.setTel(tel);
    this.setState(function () {
      return {
        data: dataFactory.find(tel)
      }
    });
  }

  track(number) {
    window.open('https://m.kuaidi100.com/index_all.html?postid=' + number + '&callbackurl=http%3a%2f%2fyuizhou.coding.me%2fjoeydvd');
  }

  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <PageHeader>容祖儿银河护卫队 MY.SECRET.LIVE DVD团购查询</PageHeader>
        <TelForm onSubmit={this.show} />
        <br />
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
              <Button bsStyle='info' onClick={this.track.bind(this, data['快递单号'])}>查询你的快递</Button>
            </div>
            : <p>{data}</p>
        }
        <br />
        <br />
        <br />
        <hr />
        <p>揣摩不到的分数，等你的拥抱<br /><sub>--容祖儿《如果睡袍太少布》</sub></p>
      </div>
    );
  }
}

export default App;

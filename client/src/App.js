import React, { Component } from 'react';
import config from './config';
import './App.css';

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    console.log("[componentDidMount]");
    this.callApi()
      .then(res => {
        console.log("express response:");
        console.log(res);
        this.setState({response: res.hello});
      })
      .catch(err => {
        console.log("error");
        console.log(err)
      });
  }

  callApi = async () => {
    const response = await fetch(config.API_URI);
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  }

  render() {
    console.log("[render]");
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <p>{this.state.response}</p>
        <h2>NAVIGATION: New Tweets, Saved Tweets</h2>
        <div>
          <h3>Tweets feed</h3>
          <p>Profile pic, handle, Tweet Body, date, save button</p>
        </div>
      </div>
    );
  }
}

export default App;

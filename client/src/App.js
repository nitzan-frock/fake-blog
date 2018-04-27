import React, { Component } from 'react';
import config from './config';
import './App.css';
import Tweets from './components/Tweets/Tweets';
import Input from './components/Input/Input';

class App extends Component {
  state = {
    searchValue: 'Goblins',
    tweets: ''
  };

  componentDidMount() {
    console.log("[componentDidMount]");
    this.callSearchApi()
      .then(res => {
        console.log("express response:");
        console.log(res);
        this.setState({tweets: res});
      })
      .catch(err => {
        console.log(err)
      });
  }

  callSearchApi = async () => {
    const response = await fetch(config.API_URI+"/search", {value: this.state.searchValue});
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  }

  searchChangedHandler = (event) => {
    event.preventDefault();
    this.setState({searchValue: event.target.value});
  }

  searchForTweets = async () => {
    console.log("searching with: " + this.state.searchValue);
    const response = await fetch(config.API_URI+"/search", {
      method: 'POST',
      body: JSON.stringify(this.state.searchValue),
      headers: {"Content-Type": "application/json"}
    });
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    this.setState({tweets: body});

    // this.callSearchApi()
    //   .then(res => {
    //     this.setState({tweets: res});
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }
  

  render() {
    console.log("[render]");
    let tweets = null;

    if (this.state.tweets) {
      tweets = <Tweets statuses={this.state.tweets.statuses} />;
    }
 
    return (
      <div className="App">
        <h2>NAVIGATION: New Tweets, Saved Tweets</h2>
        <Input 
          changed={this.searchChangedHandler} 
          value={this.state.searchValue}
          onClick={this.searchForTweets} />
        <div>
          {tweets}
          <p>Profile pic, handle, Tweet Body, date, save button</p>
        </div>
      </div>
    );
  }
}

export default App;

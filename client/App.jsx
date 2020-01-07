import React, { Component } from 'react';
import Tweets from './content/tweets.json'
import Feed from './components/Feed'

class App extends Component {
    constructor() {
        super();
        this.state = {
            tweets: Tweets
        };
    }

    render() {
        return (
          <div className="container">
            <div className="feed">
             <Feed tweets={this.state.tweets}/>
            </div>
          </div>
        );
    }
}

export default App;

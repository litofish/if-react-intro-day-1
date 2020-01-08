import React from 'react';
import Feed from './components/Feed';
import Thread from './components/Thread';
import tweets from './content/tweets.json';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tweets,
      selectedTweet: {}
    };
    this.toggleLike = this.toggleLike.bind(this);
    this.selectTweet = this.selectTweet.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  toggleLike(tweetId) {
    this.setState(prevState => {
      return {
        tweets: prevState.tweets.map(tweet => {
          return tweetId === tweet.id
            ? {
                ...tweet,
                is_liked: !tweet.is_liked,
                likes: tweet.likes + (tweet.is_liked ? -1 : 1)
              }
            : tweet;
        })
      };
    });
  }

  selectTweet(tweet) {
      this.setState({
          selectedTweet: tweet
      });
  }

  goBack() {
      this.setState({
          selectedTweet: {}
      });
  }

  render() {
    if (this.state.selectedTweet.id) {
        return (
        <div className="container">
            <Thread
            tweet={this.state.selectedTweet}
            toggleLike={this.toggleLike}
            selectTweet={this.selectTweet}
            goBack={this.goBack}
            />
        </div>
        );
    }
    return (
        <div className="container">
        <Feed
        tweets={this.state.tweets}
        toggleLike={this.toggleLike}
        selectTweet={this.selectTweet}
        />
      </div>
    )
  }
}

export default App;

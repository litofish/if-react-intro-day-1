import React from 'react';
import Feed from './components/Feed';
import tweets from './content/tweets.json';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tweets
    };
    this.toggleLike = this.toggleLike.bind(this);
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

  render() {
    return (
      <div className="container">
        <Feed tweets={this.state.tweets} toggleLike={this.toggleLike} />
      </div>
    );
  }
}

export default App;

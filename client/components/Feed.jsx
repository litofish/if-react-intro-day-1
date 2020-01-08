import React from 'react';
import Tweet from './Tweet';

const Feed = props => {
  const { tweets, toggleLike, selectTweet } = props;
  // equivalent to
  // const tweets = props.tweets;
  // const toggleLike = props.toggleLike;

  return (
    <div className="feed">
      <div className="header">Home</div>
      <div>
        {tweets.map(tweet => (
            <Tweet
            tweet={tweet}
            key={tweet.id}
            toggleLike={toggleLike}
            selectTweet={selectTweet}
            />
        ))}
      </div>
    </div>
  );
};

export default Feed;

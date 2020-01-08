import React from 'react';
import Tweet from './Tweet';

const Thread = props => {
    const {tweet, toggleLike, selectTweet, goBack} = props;

    return (
        <div className="thread">
        <div className="header" onClick={() => goBack()}>Tweet</div>
        <div>
            <Tweet
            tweet={tweet}
            toggleLike={toggleLike}
            selectTweet={selectTweet}
            />
          <div>
          {tweet.comments.map(comment => (
            <Tweet
            tweet={comment}
            key={comment.id}
            toggleLike={toggleLike}
            selectTweet={selectTweet}
            />
          ))}
          </div>
        </div>
        </div>
    );
};

export default Thread;

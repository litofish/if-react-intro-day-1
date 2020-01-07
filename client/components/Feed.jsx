import React from 'react';
import Tweet from './Tweet';

const Feed = props => {
    const tweets = props.tweets;

    return (
        <div className="container">
            <h1>Home</h1>
            <div>
            {tweets.map(tweet => (
                <Tweet
                tweet={tweet}
                key={tweet.id}
                />
            ))}
            </div>
        </div>
    );
};

export default Feed;

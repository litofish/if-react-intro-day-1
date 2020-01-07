import React from 'react';

const Tweet = props => {
    const username = props.tweet.username;
    const user_displayname = props.tweet.user_displayname;
    const photo = props.tweet.user_profile_photo;
    const content = props.tweet.content;
    const likes = props.tweet.likes;
    const is_liked = props.tweet.is_liked;

    return (
    <div className="tweet-card flex-row">
      <div className="profile-photo">
        <img src={photo} alt="new"/>
      </div>
      <div className="content">
        <div>{`${username}`}</div>
        <div>{`${user_displayname}`}</div>
        {`${content}`}
      </div>
    </div>
    );
};

export default Tweet;

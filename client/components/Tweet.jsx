import React from 'react';

const Tweet = props => {
  const { tweet, toggleLike, selectTweet } = props;
  const {
    id,
    username,
    user_displayname,
    content,
    is_liked,
    likes,
    user_profile_photo,
    comment
  } = tweet;

  return (
    <div className="tweet-card flex-row" onClick={() => selectTweet(tweet)}>
      <div className="profile-photo">
        <img src={user_profile_photo} />
      </div>
      <div className="content">
        <div>
          <span className="display-name">{user_displayname}</span>
          {`@${username}`}
        </div>
        <div>{content ? content: comment}</div>
        <div onClick={() => toggleLike(id)}>
          {/* the "class" attribute is reserved for html, so React allows you to apply classes to elements by assigning them to "className" */}
          <i className={`fa fa-heart ${is_liked ? 'liked' : ''}`} />
          {likes > 0 && likes}
        </div>
      </div>
    </div>
  );
};

export default Tweet;

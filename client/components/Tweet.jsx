import React from 'react';

const Tweet = props => {
  const { tweet, toggleLike } = props;
  const {
    id,
    username,
    user_displayname,
    content,
    is_liked,
    likes,
    user_profile_photo
  } = tweet;

  return (
    <div className="tweet-card flex-row">
      <div className="profile-photo">
        <img src={user_profile_photo} />
      </div>
      <div className="content">
        <div>
          <span className="display-name">{user_displayname}</span>
          {`@${username}`}
        </div>
        <div>{content}</div>
        <div onClick={() => toggleLike(id)}>
          {/* the "class" attribute is reserved for html, so React allows you to apply classes to elements by assigning them to "className" */}
          <i className={`fa fa-heart ${is_liked ? 'liked' : ''}`} />
          {likes}
        </div>
      </div>
    </div>
  );
};

export default Tweet;

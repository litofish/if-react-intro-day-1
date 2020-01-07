import React from 'react';

const Comments = props => {
  if (!props.comments.length) {
    return null;
  }

  return (
    <div>
      {props.comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default Comments;

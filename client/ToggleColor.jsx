import React from 'react';

const ToggleColor = props => {
  const color = props.color;
  const handleClick = props.handleClick;

  return <div className={`toggle ${color}`} onClick={handleClick} />;
};

export default ToggleColor;

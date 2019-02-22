import React, { useState } from 'react';
import './SingleBranch.scss';

const reservedBranches = ['master', 'lightmerge'];

const SingleBranch = (props) => {
  const [status, setStatus] = useState(props.checked);

  const handleClick = () => {
    setStatus(!status);
    props.onClick();
  }

  const generateClassName = (className, extraClasses = []) => [className, ...extraClasses].join(' ');

  const disabled = branch => reservedBranches.includes(branch);

  return (
    <div className={generateClassName('SingleBranch', props.extraClasses)}>
      {
        props.isGroup
        ? <span className="Arrow" onClick={handleClick}>{ !status ? '+' : '-' }</span>
        : (
          !disabled(props.text)
          ? <input className="Checkbox" type="checkbox" checked={status} onChange={handleClick} />
          : null
        )
      }
      <code className="Text">{ props.text }</code>
    </div>
  );
};

export default SingleBranch;

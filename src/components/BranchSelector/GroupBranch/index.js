import React, { useState } from 'react';
import SingleBranch from '../SingleBranch';
import './GroupBranch.scss';

const GroupBranch = (props) => {
  const [status, setStatus] = useState(props.folded);

  const handleClick = () => {
    setStatus(!status);
  }

  const childrenList = props.children.map(branch => (
    <SingleBranch
      key={branch.name}
      text={branch.name}
      checked={branch.checked}
      onClick={() => {
        const branchName = `${props.text}/${branch.name}`;
        props.onChildClicked(branchName);
      }}
      extraClasses={['Indent']}
    />
  ));

  return (
    <div className="GroupBranch">
      <SingleBranch text={props.text} checked={!props.folded} isGroup={true} onClick={handleClick} />
      { status ? null : childrenList }
    </div>
  );
};

export default GroupBranch;

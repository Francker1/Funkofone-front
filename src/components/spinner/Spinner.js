import React from 'react';

import './style/spinner.css';

const Spinner = () => {
  return (
    <>
      Loading
      <div className="lds-roller">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </>
  );
};

export default Spinner;

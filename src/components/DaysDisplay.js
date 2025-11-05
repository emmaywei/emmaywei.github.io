import React from 'react';

const DaysDisplay = ({ days }) => {
  return (
    <div className="days-display">
      <h2>Days Since Last Watered:</h2>
      <p>{days}</p>
    </div>
  );
};

export default DaysDisplay;
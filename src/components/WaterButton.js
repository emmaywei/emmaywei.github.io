import React from 'react';
import { resetDaysCount } from '../js/daysCounter';

const WaterButton = () => {
  const handleWaterPlants = () => {
    resetDaysCount();
    alert('You have watered the plants!');
  };

  return (
    <button onClick={handleWaterPlants} className="water-button">
      I have watered plants
    </button>
  );
};

export default WaterButton;
import React from 'react';
import Bell from './Bell'
import Addnewtask from '../Left/Addnewtask';

import './Center.css';

function Center() {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  

  return (
    <div className="col-md-6 col-lg-8 bg-light">
      <div className="d-flex justify-content-between align-items-center">
     
        <div className="d-flex align-items-center">
          <Bell/>
          <Addnewtask/>
        </div>
      </div>
    </div>
  );
}

export default Center;

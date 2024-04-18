import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';
import './quehacemso.css';

const Quehacemos = () => {
  return (
    <div className="que-container">
      <div style={{ width: '100%', height: '70vh', display: 'flex', justifyContent: 'center' }}>
        <Suspense fallback={<div>Loading...</div>}>
          <Spline
            scene="https://draft.spline.design/lenVqiEnsy81YInC/scene.splinecode"
            style={{ width: '70%' }}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default Quehacemos;

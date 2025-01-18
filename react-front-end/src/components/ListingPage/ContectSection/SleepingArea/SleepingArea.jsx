import React from 'react'
import { SleepingAreaWrapper } from './SleepingArea.styled'

const SleepingArea = () => {
  return (
    <SleepingAreaWrapper>
      <div className="Sleeping-area-title">
        <p>Where you'll sleep</p>
      </div>
      <div className="Bedroom-area">
        <div className="Bedroom-area-img">
           
        </div>
        <div className="Bedroom-area-title-subtitle">
          <div className="Bedroom-area-title">
            <p>Bedroom</p>
          </div>
          <div className="Bedroom-area-subtitle">
            <p>1 queen bed</p>
          </div>
        </div>
      </div>
    </SleepingAreaWrapper>
  );
}

export default SleepingArea

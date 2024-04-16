import React from "react";

function CreativeProgress({ progressCount, progressWidth }) {
  return (
    <>
      <p>Creative Progress</p>
      <div className="progress-container">
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${progressWidth}%` }}
          ></div>
        </div>
        <span>{progressCount} / 5 Creatives</span>
      </div>
    </>
  );
}

export default CreativeProgress;

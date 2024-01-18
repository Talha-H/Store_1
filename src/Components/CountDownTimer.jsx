"use client";
import React, { useState, useEffect } from "react";
import { CalculateRemainingTime } from "../utils/dateUtils";

const CountDownTimer = ({ targetDate }) => {
  const [remainingTime, setremainingTime] = useState(
    CalculateRemainingTime(targetDate)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setremainingTime(CalculateRemainingTime(targetDate));
    }, 1000);

    return () => (clearInterval) => interval;
  }, [targetDate]);

  return (
    <div>
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            {remainingTime.days}
          </span>
          days
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": remainingTime.hours }}></span>
          </span>
          hours
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": remainingTime.minutes }}></span>
          </span>
          min
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": remainingTime.seconds }}></span>
          </span>
          sec
        </div>
      </div>
    </div>
  );
};

export default CountDownTimer;

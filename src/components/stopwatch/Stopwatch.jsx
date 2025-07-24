import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  //   const stopwatchRef = useRef(null);
  //   const intervalRef = useRef(null);

  //   const handleStart = () => {
  //     stopwatchRef.current = new Date().getTime();
  //     intervalRef.current = setInterval(() => {
  //       setTime(new Date().getTime() - stopwatchRef.current);
  //     }, 10);
  //   };

  //   const handlePause = () => {};

  //   const handleReset = () => {};
  const handleStart = () => {
    setIsRunning(true);
  };
  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 10);
    }

    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  return (
    <>
      <div className="container">
        <span className="heading">Stopwatch</span>
        <div className="container--inputs">
          <input
            type="number"
            value={String(Math.floor(time / 100 / 60 / 60 / 60)).padStart(
              2,
              "0"
            )}
          />
          <span className="title">hrs</span>
          <span className="colon">:</span>
          <input
            type="text"
            value={String(Math.floor((time / 100 / 60) % 60)).padStart(2, "0")}
          />
          <span className="title">min</span>
          <span className="colon">:</span>
          <input
            type="text"
            value={String(Math.floor((time / 100) % 60)).padStart(2, "0")}
          />
          <span className="title">sec</span>
          <span className="colon">:</span>
          <input
            type="text"
            value={String(Math.floor(time % 100)).padStart(2, "0")}
          />
          <span className="title">msec</span>
        </div>
        <div className="container--btns">
          <button onClick={handleStart}>Start</button>
          <button onClick={handlePause}>Pause</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </>
  );
};

export default StopWatch;

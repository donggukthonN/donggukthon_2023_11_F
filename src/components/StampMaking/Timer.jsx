import { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";

const Timer = ({ leftTime }) => {
  const [timerSeconds, setTimerSeconds] = useState(parseInt(leftTime));

  useEffect(() => {
    if (timerSeconds > 0) {
      const timer = setInterval(() => {
        setTimerSeconds((timerSeconds) => timerSeconds - 1);
        //console.log(timerSeconds);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      console.log("우표 만들기 타이머 종료!");
    }
  }, [timerSeconds, leftTime]);

  return (
    <>
      <ProgressBar leftTime={timerSeconds} />
    </>
  );
};

export default Timer;

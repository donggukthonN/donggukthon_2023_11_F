import { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";

const Timer = ({ leftTime, setTimeout }) => {
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
      setTimeout(true);
    }
  }, [timerSeconds, leftTime]);

  return (
    <>
      <ProgressBar leftTime={timerSeconds} />
    </>
  );
};

export default Timer;

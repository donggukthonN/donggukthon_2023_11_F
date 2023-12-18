import { useEffect, useState } from "react";
import {
  StyledStartCountContainer,
  StyledStartCountLoading,
  StyledStartCountNumber,
  StyledStartCountTitle,
} from "./styled";

const StartCount = ({ setReady }) => {
  // 타이머 구현하기
  const [timerSeconds, setTimerSeconds] = useState(3);

  useEffect(() => {
    if (timerSeconds > 0) {
      const timer = setInterval(() => {
        setTimerSeconds((timerSeconds) => timerSeconds - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      console.log("시작!");
      setReady(true);
    }
  }, [timerSeconds]);

  return (
    <StyledStartCountContainer>
      <StyledStartCountTitle>우표를 예쁘게 꾸며보세요!</StyledStartCountTitle>
      <StyledStartCountLoading>Loading</StyledStartCountLoading>
      <StyledStartCountNumber>{timerSeconds}</StyledStartCountNumber>
    </StyledStartCountContainer>
  );
};

export default StartCount;

import { useEffect, useState } from "react";
import styled from "styled-components";

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

const StyledStartCountContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: black;
  opacity: 0.5;
  font-size: 17px;
  z-index: 100;
`;

const StyledStartCountTitle = styled.p`
  color: white;
  font-size: 1.2rem;
`;

const StyledStartCountLoading = styled.div`
  margin-top: 10px;
  margin-bottom: 50px;
  color: white;
  font-size: 3rem;
`;

const StyledStartCountNumber = styled.div`
  color: white;
  font-size: 8rem;
`;

import styled from "styled-components";
import { RiTimerFill } from "react-icons/ri";

const ProgressBar = ({ leftTime }) => {
  let currentPercent = parseInt((leftTime / 600) * 100);

  return (
    <Container>
      {leftTime <= 60 && <TimerText>{leftTime}초 남았습니다!</TimerText>}
      <FullBar>
        <TimerIcon />
        <PartBar
          style={{
            width: `${currentPercent}%`,
            // setting the actual color of bar part
            backgroundColor: "#2D9985",
          }}
        ></PartBar>
      </FullBar>
    </Container>
  );
};

export default ProgressBar;

const Container = styled.div`
  margin: 5px 20px;
  padding: 20px;
  //border: 1px solid #e5e5e5;
  border-radius: 10px;
`;

const TimerText = styled.div`
  padding-left: 10px;
`;

const FullBar = styled.div`
  position: relative;

  display: flex;
  //width: 100%;
  /* change the value if you want different thickness */
  width: 100%;
  height: 10px;
  margin: 10px;
  background-color: #e5e5e5;
`;
const TimerIcon = styled(RiTimerFill)`
  position: absolute;
  top: -12px;
  left: -35px;
  font-size: 30px;
`;

const PartBar = styled.div``;

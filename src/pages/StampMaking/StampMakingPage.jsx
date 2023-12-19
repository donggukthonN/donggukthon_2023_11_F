import { useEffect, useState } from "react";
import StartCount from "../../components/StampMaking/StartCount";
import Timer from "../../components/StampMaking/Timer";
import {
  StyledStampMakingButton,
  StyledStampMakingContainer,
  StyledStampMakingInnerContainer,
  StyledStampMakingTitle,
} from "./styled";
import ChooseColor from "../../components/StampMaking/ChooseColor";
import DrawingPanel from "../../components/StampMaking/DrawingPanel";
import { useNavigate, useParams } from "react-router-dom";
import { getCheckRoomMaker, getMakeStamp } from "../../api/canvas";

const StampMakingPage = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [selectedColor, setSelectedColor] = useState("#f44336");
  const [ready, setReady] = useState(false);
  const [leftTime, setLeftTime] = useState(0); // 처음엔 정지함
  const [colorData, setColorData] = useState([]); // 초기 배열

  useEffect(() => {
    if (ready) {
      setLeftTime(100); // 테스트용
      console.log("api 호출하기 + 소켓 연결");
      let data = getMakeStamp(params.id, "accessCookie값 넣기");
      if (data.status === "SUCCESS") {
        navigate(`/`);
        setLeftTime(data.result.leftTime);
        setColorData(data.result.color);
        // 여기서 링크값 recoil에 저장하기!
      } else if (data.status === "FAILED") {
        alert(data.message);
      } else if (data.status === "NONE") {
        navigate(`/`);
      }
    }
  }, [ready, params.id]);

  const onChangeColor = (color) => {
    setSelectedColor(color.hex);
  };

  const onClickFinish = () => {
    let data = getCheckRoomMaker(params.id, "accessCookie값 넣기");
    if (data.status === "SUCCESS") {
      if (data.result.roomMaker) {
        navigate(`/stampNaming`); // 팀장일 때
      } else {
        navigate(`/loading`);
      }
    } else if (data.status === "FAILED") {
      alert(data.message);
    }
  };

  return (
    <>
      {!ready && <StartCount setReady={setReady} />}
      <StyledStampMakingContainer>
        <StyledStampMakingInnerContainer>
          <StyledStampMakingTitle>
            우표를 예쁘게 꾸며보세요!
          </StyledStampMakingTitle>
          {ready && leftTime > 0 && <Timer leftTime={leftTime} />}
          <ChooseColor
            selectedColor={selectedColor}
            onChangeColor={onChangeColor}
          />
          {colorData && colorData.length > 0 && (
            <DrawingPanel
              width={13}
              height={13}
              selectedColor={selectedColor}
              colorData={colorData}
            />
          )}
          <StyledStampMakingButton onClick={onClickFinish}>
            완성하기
          </StyledStampMakingButton>
        </StyledStampMakingInnerContainer>
      </StyledStampMakingContainer>
    </>
  );
};

export default StampMakingPage;

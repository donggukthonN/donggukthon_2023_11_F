import { useEffect, useState } from "react";
import StartCount from "../../components/StampMaking/StartCount";
import Timer from "../../components/StampMaking/Timer";
import {
  StyledStampMakingContainer,
  StyledStampMakingInnerContainer,
  StyledStampMakingTitle,
} from "./styled";
import ChooseColor from "../../components/StampMaking/ChooseColor";

const StampMakingPage = () => {
  const [selectedColor, setSelectedColor] = useState("#f44336");
  const [ready, setReady] = useState(false);
  const [leftTime, setLeftTime] = useState(0); // 처음엔 정지함

  useEffect(() => {
    if (ready) {
      setLeftTime(100); // 테스트용
      console.log("api 호출하기 + 소켓 연결");
    }
  }, [ready]);

  const onChangeColor = (color) => {
    setSelectedColor(color.hex);
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
        </StyledStampMakingInnerContainer>
      </StyledStampMakingContainer>
    </>
  );
};

export default StampMakingPage;

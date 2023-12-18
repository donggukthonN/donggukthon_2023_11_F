import {
  StyledStampNamingTitle,
  StyledStampNamingButton,
  StyledStampNamingContainer,
  StyledStampNamingStampWrapper,
  StyledStampNamingStampFrame,
  StyledStampNamingExplain,
  StyledStampNamingInput,
} from "./styled";
import StampFrame from "../../assets/images/stamp-frame.svg";
import { useState } from "react";

const StampNamingPage = () => {
  const [name, setName] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  return (
    <StyledStampNamingContainer>
      <StyledStampNamingStampWrapper>
        <StyledStampNamingStampFrame src={StampFrame} alt={"완성된 씰"} />
      </StyledStampNamingStampWrapper>
      <StyledStampNamingTitle>우표의 이름을 붙여주세요!</StyledStampNamingTitle>
      <StyledStampNamingExplain>
        * 수정이 불가하니 신중하게 작성해주세요
      </StyledStampNamingExplain>
      <StyledStampNamingInput
        value={name}
        onChange={onChangeName}
        placeholder="이름을 작성해주세요."
      />
      <StyledStampNamingButton>완성하기</StyledStampNamingButton>
    </StyledStampNamingContainer>
  );
};

export default StampNamingPage;

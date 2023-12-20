import {
  StyledStampNamingTitle,
  StyledStampNamingButton,
  StyledStampNamingContainer,
  StyledStampNamingStampWrapper,
  StyledStampNamingExplain,
  StyledStampNamingInput,
} from "./styled";
import { useState } from "react";
import { postNewStamp } from "../../api/stamp";
import { useNavigate } from "react-router-dom";
import StampImg from "../../components/StampList/StampImg";

const StampNamingPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onClickFinish = () => {
    if (!name || name === "" || name === undefined) {
      alert("우표의 이름을 작성해주세요.");
      return;
    }

    const accessCookie = localStorage.getItem("accessCookie");
    let data = postNewStamp(name, accessCookie);
    if (data.status === "SUCCESS") {
      navigate(`/stampResult/${data.result.stampId}`);
      // 여기서 받은 data.result.stampId를 param으로 보내기
    } else {
      alert(data.message);
    }
  };

  return (
    <StyledStampNamingContainer>
      <StyledStampNamingStampWrapper>
        <StampImg />
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
      <StyledStampNamingButton onClick={onClickFinish}>
        완성하기
      </StyledStampNamingButton>
    </StyledStampNamingContainer>
  );
};

export default StampNamingPage;

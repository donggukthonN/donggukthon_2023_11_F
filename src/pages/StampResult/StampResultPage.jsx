import {
  StyledStampResultTitle,
  StyledStampResultButton,
  StyledStampResultContainer,
  StyledStampResultTitleRed,
  StyledStampResultStampWrapper,
  StyledStampResultStampFrame,
} from "./styled";
import StampFrame from "../../assets/images/stamp-frame.svg";

const StampResultPage = () => {
  return (
    <StyledStampResultContainer>
      <StyledStampResultStampWrapper>
        <StyledStampResultStampFrame src={StampFrame} alt={"완성된 씰"} />
      </StyledStampResultStampWrapper>
      <StyledStampResultTitle>
        <StyledStampResultTitleRed>"우표 이름~"</StyledStampResultTitleRed>{" "}
        우표가
      </StyledStampResultTitle>
      <StyledStampResultTitle>
        우표 게시판에 등록되었습니다.
      </StyledStampResultTitle>
      <StyledStampResultButton>저장된 우표 보러가기</StyledStampResultButton>
    </StyledStampResultContainer>
  );
};

export default StampResultPage;

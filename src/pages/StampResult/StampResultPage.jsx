import {
  StyledStampResultTitle,
  StyledStampResultButton,
  StyledStampResultContainer,
  StyledStampResultTitleRed,
  StyledStampResultStampWrapper,
  StyledStampResultStampFrame,
} from "./styled";
import StampFrame from "../../assets/images/stamp-frame.svg";
import { useEffect, useState } from "react";
import { getStampInfo } from "../../api/stamp";
import { useParams } from "react-router-dom";

const StampResultPage = () => {
  const params = useParams();

  const [stampData, setStampData] = useState(null);

  useEffect(() => {
    const accessCookie = localStorage.getItem("accessCookie");
    let data = getStampInfo(params.id, accessCookie);
    if (data.status === "SUCCESS") {
      setStampData(data.result);
    } else {
      alert(data.message);
    }
  }, [params.id]);

  return (
    <StyledStampResultContainer>
      {stampData && stampData !== undefined && (
        <>
          <StyledStampResultStampWrapper>
            <StyledStampResultStampFrame src={StampFrame} alt={"완성된 씰"} />
          </StyledStampResultStampWrapper>
          <StyledStampResultTitle>
            <StyledStampResultTitleRed>
              "{stampData.stampName}"
            </StyledStampResultTitleRed>{" "}
            우표가
          </StyledStampResultTitle>
          <StyledStampResultTitle>
            우표 게시판에 등록되었습니다!
          </StyledStampResultTitle>
          <StyledStampResultButton>
            저장된 우표 보러가기
          </StyledStampResultButton>
        </>
      )}
    </StyledStampResultContainer>
  );
};

export default StampResultPage;

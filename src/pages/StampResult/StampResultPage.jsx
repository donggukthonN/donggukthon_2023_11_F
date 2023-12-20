import {
  StyledStampResultTitle,
  StyledStampResultButton,
  StyledStampResultContainer,
  StyledStampResultTitleRed,
  StyledStampResultStampWrapper,
} from "./styled";
import { useEffect, useState } from "react";
import { getStampInfo } from "../../api/stamp";
import { useNavigate, useParams } from "react-router-dom";
import StampImg from "../../components/StampList/StampImg";

const StampResultPage = () => {
  const params = useParams();
  const navigate = useNavigate();

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
            <StampImg />
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
          <StyledStampResultButton
            onClick={() => navigate("/mypage/stampList")}
          >
            저장된 우표 보러가기
          </StyledStampResultButton>
        </>
      )}
    </StyledStampResultContainer>
  );
};

export default StampResultPage;

import {
  StyledSealDetailButton,
  StyledSealDetailContainer,
  StyledSealDetailContentContainer,
  StyledSealDetailContentText,
  StyledSealDetailContentWrapper,
  StyledSealDetailDateIcon,
  StyledSealDetailHeaderContainer,
  StyledSealDetailHeaderIcon,
  StyledSealDetailHeaderTitle,
  StyledSealDetailImgWrapper,
  StyledSealDetailInnerContainer,
  StyledSealDetailLikeWrapper,
  StyledSealDetailTitleContainer,
} from "./styled";
import LikeChecked from "../../assets/icon/like-checked.svg";
import LikeUnchecked from "../../assets/icon/like-unchecked.svg";
import SealFrameImg from "../../assets/images/seal-frame.svg";
import { useEffect, useState } from "react";
import { getSealSingle, putSealLike } from "../../api/seal";
import { useNavigate, useParams } from "react-router-dom";

const SealDetailPage = () => {
  // params로 받기!
  const params = useParams();
  const navigate = useNavigate();
  const [sealData, setSealData] = useState(null);

  const getSealSingleApi = () => {
    const accessCookie = localStorage.getItem("accessCookie");
    let data = getSealSingle(params.id, accessCookie);
    if (data.status === "SUCCESS") {
      setSealData(data.result);
    } else {
      alert(data.message);
    }
  };

  useEffect(() => {
    getSealSingleApi();
    let result = {
      nickname: "우표 이름~~",
      likeCnt: 3,
      like: false, //true면 채워진하트, false면 빈하트
      date: "yyyy.mm.dd", //2023.09.03
      maker: "김수진",
      ImgUrl: "String", //url
    };
    setSealData(result);
  }, [params.id]);

  const onClickLike = (like) => {
    // console.log("좋아요 api: ", like);
    // 성공하면 새로 고침말고 setSealData로 일부분만 바꾸기!
    const accessCookie = localStorage.getItem("accessCookie");
    let data = putSealLike(params.id, like, accessCookie);
    if (data.status === "SUCCESS") {
      //setSealData({ ...sealData, like: like });
      getSealSingleApi();
    } else {
      data?.message && alert(data.message);
    }
  };

  const onClickOrder = () => {
    navigate("/order");
  };

  return (
    <StyledSealDetailContainer>
      {sealData && sealData !== undefined && (
        <StyledSealDetailInnerContainer>
          <StyledSealDetailHeaderContainer>
            <StyledSealDetailHeaderIcon onClick={() => navigate(-1)} />
            <StyledSealDetailHeaderTitle>씰 게시판</StyledSealDetailHeaderTitle>
          </StyledSealDetailHeaderContainer>
          <StyledSealDetailImgWrapper>
            <img src={SealFrameImg} alt={"씰 사진"} width={"200px"} />
          </StyledSealDetailImgWrapper>
          <StyledSealDetailTitleContainer>
            <div>이름 : {sealData.nickname}</div>
            <StyledSealDetailLikeWrapper>
              {sealData.like ? (
                <img
                  src={LikeChecked}
                  alt={"좋아요 수"}
                  style={{ height: "30px" }}
                  onClick={() => onClickLike(false)}
                />
              ) : (
                <img
                  src={LikeUnchecked}
                  alt={"좋아요 수"}
                  style={{ height: "30px" }}
                  onClick={() => onClickLike(true)}
                />
              )}
              <div>{sealData.likeCnt}</div>
            </StyledSealDetailLikeWrapper>
          </StyledSealDetailTitleContainer>
          <StyledSealDetailContentContainer>
            <StyledSealDetailContentWrapper>
              <StyledSealDetailDateIcon />
              제작일
            </StyledSealDetailContentWrapper>
            <StyledSealDetailContentText>
              {sealData.date}
            </StyledSealDetailContentText>
          </StyledSealDetailContentContainer>
          <StyledSealDetailButton onClick={onClickOrder}>
            주문하기
          </StyledSealDetailButton>
        </StyledSealDetailInnerContainer>
      )}
    </StyledSealDetailContainer>
  );
};

export default SealDetailPage;

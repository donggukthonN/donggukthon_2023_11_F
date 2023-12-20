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

const SealDetailPage = ({ sealId }) => {
  // params로 받기!
  const [sealData, setSealData] = useState(null);

  useEffect(() => {
    const accessCookie = localStorage.getItem("accessCookie");
    let data = getSealSingle(sealId, accessCookie);
    if (data.status === "SUCCESS") {
      setSealData(data.result);
    } else {
      alert(data.message);
    }

    // let result = {
    //   nickname: "우표 이름~~",
    //   likeCnt: 3,
    //   like: false, //true면 채워진하트, false면 빈하트
    //   date: "yyyy.mm.dd", //2023.09.03
    //   maker: "김수진",
    //   ImgUrl: "String", //url
    // };
    // setSealData(result);
  }, [sealId]);

  const onClickLike = (like) => {
    // console.log("좋아요 api: ", like);
    // 성공하면 새로 고침말고 setSealData로 일부분만 바꾸기!
    const accessCookie = localStorage.getItem("accessCookie");
    let data = putSealLike(sealId, like, accessCookie);
    if (data.status === "SUCCESS") {
      setSealData({ ...sealData, like: like });
    } else {
      alert(data.message);
    }
  };

  const onClickOrder = () => {
    console.log("주문 페이지로 이동하기!");
  };

  return (
    <StyledSealDetailContainer>
      {sealData && sealData !== undefined && (
        <StyledSealDetailInnerContainer>
          <StyledSealDetailHeaderContainer>
            <StyledSealDetailHeaderIcon />
            <StyledSealDetailHeaderTitle>씰 게시판</StyledSealDetailHeaderTitle>
          </StyledSealDetailHeaderContainer>
          <StyledSealDetailImgWrapper>
            <img src={SealFrameImg} alt={"씰 사진"} width={"100%"} />
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

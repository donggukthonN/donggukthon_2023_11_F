import {
  StyledStampDetailContainer,
  StyledStampDetailContentContainer,
  StyledStampDetailContentText,
  StyledStampDetailContentWrapper,
  StyledStampDetailDateIcon,
  StyledStampDetailFriendIcon,
  StyledStampDetailHeaderContainer,
  StyledStampDetailHeaderIcon,
  StyledStampDetailHeaderTitle,
  StyledStampDetailImgWrapper,
  StyledStampDetailInnerContainer,
  StyledStampDetailLikeWrapper,
  StyledStampDetailTitleContainer,
} from "./styled";
import LikeChecked from "../../assets/icon/like-checked.svg";
import LikeUnchecked from "../../assets/icon/like-unchecked.svg";
import { useEffect, useState } from "react";
import CustomStamp from "../../components/Stamp/CustomStamp";
import { getStampSingle, putStampLike } from "../../api/stamp";

const StampDetailPage = ({ stampId }) => {
  // param으로 받기
  const [stampData, setStampData] = useState(null);

  useEffect(() => {
    let data = getStampSingle(stampId, "accessCookie값 넣기");
    if (data.status === "SUCCESS") {
      setStampData(data.result);
    } else {
      alert(data.message);
    }

    // let result = {
    //   nickname: "우표 이름~~",
    //   likeCnt: 3,
    //   like: false, //true면 채워진하트, false면 빈하트
    //   date: "yyyy.mm.dd", //2023.09.03
    //   friendList: ["김수진", "박동욱", "이수빈"],
    //   ImgUrl: "String", //url
    // };
    // setStampData(result);
  }, [stampId]);

  const onClickLike = (like) => {
    //console.log("좋아요 api: ", like);
    // 성공하면 새로 고침말고 setStampData로 일부분만 바꾸기!
    let data = putStampLike(stampId, like, "accessCookie값 넣기");
    if (data.status === "SUCCESS") {
      setStampData({ ...stampData, like: like });
    } else {
      alert(data.message);
    }
  };

  return (
    <StyledStampDetailContainer>
      {stampData && stampData !== undefined && (
        <StyledStampDetailInnerContainer>
          <StyledStampDetailHeaderContainer>
            <StyledStampDetailHeaderIcon />
            <StyledStampDetailHeaderTitle>
              우표 게시판
            </StyledStampDetailHeaderTitle>
          </StyledStampDetailHeaderContainer>
          <StyledStampDetailImgWrapper>
            <CustomStamp />
          </StyledStampDetailImgWrapper>
          <StyledStampDetailTitleContainer>
            <div>이름 : {stampData.nickname}</div>
            <StyledStampDetailLikeWrapper>
              {stampData.like ? (
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
              <div>{stampData.likeCnt}</div>
            </StyledStampDetailLikeWrapper>
          </StyledStampDetailTitleContainer>
          <StyledStampDetailContentContainer>
            <StyledStampDetailContentWrapper>
              <StyledStampDetailDateIcon />
              제작일
            </StyledStampDetailContentWrapper>
            <StyledStampDetailContentText>
              {stampData.date}
            </StyledStampDetailContentText>
            <StyledStampDetailContentWrapper>
              <StyledStampDetailFriendIcon />
              함께한 친구
            </StyledStampDetailContentWrapper>
            <StyledStampDetailContentText>
              {stampData.friendList.length > 0
                ? stampData.friendList.join(", ")
                : ""}
            </StyledStampDetailContentText>
          </StyledStampDetailContentContainer>
        </StyledStampDetailInnerContainer>
      )}
    </StyledStampDetailContainer>
  );
};

export default StampDetailPage;

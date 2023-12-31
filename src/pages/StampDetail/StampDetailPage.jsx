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
import { getStampSingle, putStampLike } from "../../api/stamp";
import StampImg from "../../components/StampList/StampImg";
import { useNavigate, useParams } from "react-router-dom";

const StampDetailPage = () => {
  // param으로 받기
  const params = useParams();
  const navigate = useNavigate();
  const [stampData, setStampData] = useState(null);

  const getStampSingleApi = () => {
    const accessCookie = localStorage.getItem("accessCookie");
    let data = getStampSingle(params.id, accessCookie);
    if (data.status === "SUCCESS") {
      setStampData(data.result);
    } else {
      data?.message && alert(data.message);
    }
  };

  useEffect(() => {
    getStampSingleApi();
    // let result = {
    //   nickname: "우표 이름~~",
    //   likeCnt: 3,
    //   like: false, //true면 채워진하트, false면 빈하트
    //   date: "yyyy.mm.dd", //2023.09.03
    //   friendList: ["김수진", "박동욱", "이수빈"],
    //   ImgUrl: "String", //url
    // };
    // setStampData(result);
  }, [params.id]);

  const onClickLike = (like) => {
    //console.log("좋아요 api: ", like);
    // 성공하면 새로 고침말고 setStampData로 일부분만 바꾸기!
    const accessCookie = localStorage.getItem("accessCookie");
    let data = putStampLike(params.id, like, accessCookie);
    if (data.status === "SUCCESS") {
      //setStampData({ ...stampData, like: like });
      getStampSingleApi();
    } else {
      data?.message && alert(data.message);
    }
  };

  return (
    <StyledStampDetailContainer>
      {stampData && stampData !== undefined && stampData !== "" && (
        <StyledStampDetailInnerContainer>
          <StyledStampDetailHeaderContainer>
            <StyledStampDetailHeaderIcon onClick={() => navigate(-1)} />
            <StyledStampDetailHeaderTitle>
              우표 게시판
            </StyledStampDetailHeaderTitle>
          </StyledStampDetailHeaderContainer>
          <StyledStampDetailImgWrapper>
            <StampImg />
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

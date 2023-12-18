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
import LikeChecked from "../../assets/images/like-checked.svg";
import SealFrameImg from "../../assets/images/seal-frame.svg";

const StampDetailPage = () => {
  return (
    <StyledStampDetailContainer>
      <StyledStampDetailInnerContainer>
        <StyledStampDetailHeaderContainer>
          <StyledStampDetailHeaderIcon />
          <StyledStampDetailHeaderTitle>
            우표 게시판
          </StyledStampDetailHeaderTitle>
        </StyledStampDetailHeaderContainer>
        <StyledStampDetailImgWrapper>
          <img src={SealFrameImg} alt={"씰 사진"} width={"100%"} />
        </StyledStampDetailImgWrapper>
        <StyledStampDetailTitleContainer>
          <div>이름 : 크리스마스~~~</div>
          <StyledStampDetailLikeWrapper>
            <img src={LikeChecked} alt={"좋아요 수"} />
            <div>19</div>
          </StyledStampDetailLikeWrapper>
        </StyledStampDetailTitleContainer>
        <StyledStampDetailContentContainer>
          <StyledStampDetailContentWrapper>
            <StyledStampDetailDateIcon />
            발행일
          </StyledStampDetailContentWrapper>
          <StyledStampDetailContentText>
            2023.12.10
          </StyledStampDetailContentText>
          <StyledStampDetailContentWrapper>
            <StyledStampDetailFriendIcon />
            함께한 친구
          </StyledStampDetailContentWrapper>
          <StyledStampDetailContentText>
            김수진, 박동욱, 이수빈
          </StyledStampDetailContentText>
        </StyledStampDetailContentContainer>
      </StyledStampDetailInnerContainer>
    </StyledStampDetailContainer>
  );
};

export default StampDetailPage;

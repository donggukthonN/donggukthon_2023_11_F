import {
  StyledSealDetailButton,
  StyledSealDetailContainer,
  StyledSealDetailContentContainer,
  StyledSealDetailContentText,
  StyledSealDetailContentWrapper,
  StyledSealDetailDateIcon,
  StyledSealDetailFriendIcon,
  StyledSealDetailHeaderContainer,
  StyledSealDetailHeaderIcon,
  StyledSealDetailHeaderTitle,
  StyledSealDetailImgWrapper,
  StyledSealDetailInnerContainer,
  StyledSealDetailLikeWrapper,
  StyledSealDetailTitleContainer,
} from "./styled";
import LikeChecked from "../../assets/images/like-checked.svg";
import SealFrameImg from "../../assets/images/seal-frame.svg";

const SealDetailPage = () => {
  return (
    <StyledSealDetailContainer>
      <StyledSealDetailInnerContainer>
        <StyledSealDetailHeaderContainer>
          <StyledSealDetailHeaderIcon />
          <StyledSealDetailHeaderTitle>씰 게시판</StyledSealDetailHeaderTitle>
        </StyledSealDetailHeaderContainer>
        <StyledSealDetailImgWrapper>
          <img src={SealFrameImg} alt={"씰 사진"} width={"100%"} />
        </StyledSealDetailImgWrapper>
        <StyledSealDetailTitleContainer>
          <div>씰 이름 : 크리스마스~~~</div>
          <StyledSealDetailLikeWrapper>
            <img src={LikeChecked} alt={"좋아요 수"} />
            <div>19</div>
          </StyledSealDetailLikeWrapper>
        </StyledSealDetailTitleContainer>
        <StyledSealDetailContentContainer>
          <StyledSealDetailContentWrapper>
            <StyledSealDetailDateIcon />
            발행일
          </StyledSealDetailContentWrapper>
          <StyledSealDetailContentText>2023.12.10</StyledSealDetailContentText>
          <StyledSealDetailContentWrapper>
            <StyledSealDetailFriendIcon />
            함께한 친구
          </StyledSealDetailContentWrapper>
          <StyledSealDetailContentText>
            김수진, 박동욱, 이수빈
          </StyledSealDetailContentText>
        </StyledSealDetailContentContainer>
        <StyledSealDetailButton>주문하기</StyledSealDetailButton>
      </StyledSealDetailInnerContainer>
    </StyledSealDetailContainer>
  );
};

export default SealDetailPage;

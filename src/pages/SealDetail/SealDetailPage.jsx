import {
  StyledSealDetailButton,
  StyledSealDetailContainer,
  StyledSealDetailContentWrapper,
  StyledSealDetailHeaderContainer,
  StyledSealDetailHeaderIcon,
  StyledSealDetailHeaderTitle,
  StyledSealDetailImgWrapper,
  StyledSealDetailInnerContainer,
  StyledSealDetailLikeWrapper,
  StyledSealDetailTitleContainer,
} from "./styled";
import LikeChecked from "../../assets/images/like-checked.svg";
import SealExampleImg from "../../assets/images/seal-example.png";

const SealDetailPage = () => {
  return (
    <StyledSealDetailContainer>
      <StyledSealDetailInnerContainer>
        <StyledSealDetailHeaderContainer>
          <StyledSealDetailHeaderIcon />
          <StyledSealDetailHeaderTitle>씰 게시판</StyledSealDetailHeaderTitle>
        </StyledSealDetailHeaderContainer>
        <StyledSealDetailImgWrapper>
          <img src={SealExampleImg} alt={"씰 사진"} width={"100%"} />
        </StyledSealDetailImgWrapper>
        <StyledSealDetailTitleContainer>
          <div>씰 이름 : 크리스마스~~~</div>
          <StyledSealDetailLikeWrapper>
            <img src={LikeChecked} alt={"좋아요 수"} />
            <div>19</div>
          </StyledSealDetailLikeWrapper>
        </StyledSealDetailTitleContainer>
        <StyledSealDetailContentWrapper>
          <p>발행일 : 2023.12.10</p>
          <p>함께한 친구 : 김수진, 박동욱, 이수빈</p>
        </StyledSealDetailContentWrapper>
        <StyledSealDetailButton>주문하기</StyledSealDetailButton>
      </StyledSealDetailInnerContainer>
    </StyledSealDetailContainer>
  );
};

export default SealDetailPage;

import {
  StyledSealItemLikeWrapper,
  StyledSealItemSealWrapper,
  StyledSealItemTitle,
  StyledSealItemTitleContainer,
} from "./styled";
import LikeChecked from "../../assets/images/like-checked.svg";
import SealFrameImg from "../../assets/images/seal-frame.svg";

const SealItem = () => {
  return (
    <StyledSealItemSealWrapper>
      <img src={SealFrameImg} alt={"씰 사진"} width={"85%"} />
      <StyledSealItemTitleContainer>
        <StyledSealItemTitle>씰 제목~~</StyledSealItemTitle>
        <StyledSealItemLikeWrapper>
          <img src={LikeChecked} alt={"좋아요 수"} />
          <div style={{ color: "#992d2d" }}>19</div>
        </StyledSealItemLikeWrapper>
      </StyledSealItemTitleContainer>
    </StyledSealItemSealWrapper>
  );
};

export default SealItem;

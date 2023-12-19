import {
  StyledSealItemLikeWrapper,
  StyledSealItemSealWrapper,
  StyledSealItemTitle,
  StyledSealItemTitleContainer,
} from "./styled";
import LikeChecked from "../../assets/icon/like-checked.svg";
import LikeUnchecked from "../../assets/icon/like-unchecked.svg";
import SealFrameImg from "../../assets/images/seal-frame.svg";

const SealItem = ({ sealData }) => {
  return (
    <StyledSealItemSealWrapper>
      <img src={SealFrameImg} alt={"씰 사진"} width={"85%"} />
      <StyledSealItemTitleContainer>
        <StyledSealItemTitle>{sealData.sealName}</StyledSealItemTitle>
        <StyledSealItemLikeWrapper>
          {sealData.like ? (
            <img src={LikeChecked} alt={"좋아요 수"} />
          ) : (
            <img
              src={LikeUnchecked}
              alt={"좋아요 수"}
              style={{ height: "30px" }}
            />
          )}
          <div style={{ color: "#992d2d" }}>{sealData.likeCnt}</div>
        </StyledSealItemLikeWrapper>
      </StyledSealItemTitleContainer>
    </StyledSealItemSealWrapper>
  );
};

export default SealItem;

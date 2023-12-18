import {
  StyledSealListContainer,
  StyledSealListInnerContainer,
  StyledSealListLikeWrapper,
  StyledSealListSearch,
  StyledSealListSearchButton,
  StyledSealListSearchButtonImg,
  StyledSealListSearchWrapper,
  StyledSealListTitleContainer,
  StyledSealListSealWrapper,
  StyledSealListTitle,
} from "./styled";
import LikeChecked from "../../assets/images/like-checked.svg";
import SealFrameImg from "../../assets/images/seal-frame.svg";
import { useState } from "react";
import { StyledSimpleHeaderContainer } from "../../styles";

const SealListPage = () => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <StyledSealListContainer>
      <StyledSealListInnerContainer>
        <StyledSimpleHeaderContainer>씰 게시판</StyledSimpleHeaderContainer>
        <StyledSealListSearchWrapper>
          <StyledSealListSearch
            type="text"
            value={search}
            onChange={onChangeSearch}
            placeholder="씰 이름을 검색해주세요."
          />
          <StyledSealListSearchButton>
            <StyledSealListSearchButtonImg />
          </StyledSealListSearchButton>
        </StyledSealListSearchWrapper>
        <StyledSealListSealWrapper>
          <img src={SealFrameImg} alt={"씰 사진"} width={"80%"} />
          <StyledSealListTitleContainer>
            <StyledSealListTitle>씰 제목~~</StyledSealListTitle>
            <StyledSealListLikeWrapper>
              <img src={LikeChecked} alt={"좋아요 수"} />
              <div style={{ color: "#992d2d" }}>19</div>
            </StyledSealListLikeWrapper>
          </StyledSealListTitleContainer>
        </StyledSealListSealWrapper>
        <StyledSealListSealWrapper>
          <img src={SealFrameImg} alt={"씰 사진"} width={"80%"} />
          <StyledSealListTitleContainer>
            <StyledSealListTitle>씰 제목~~</StyledSealListTitle>
            <StyledSealListLikeWrapper>
              <img src={LikeChecked} alt={"좋아요 수"} />
              <div style={{ color: "#992d2d" }}>19</div>
            </StyledSealListLikeWrapper>
          </StyledSealListTitleContainer>
        </StyledSealListSealWrapper>
      </StyledSealListInnerContainer>
    </StyledSealListContainer>
  );
};

export default SealListPage;

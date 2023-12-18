import {
  StyledSealListContainer,
  StyledSealListInnerContainer,
  StyledSealListLikeWrapper,
  StyledSealListSearch,
  StyledSealListSearchButton,
  StyledSealListSearchButtonImg,
  StyledSealListSearchWrapper,
  StyledSealListTitleContainer,
} from "./styled";
import LikeChecked from "../../assets/images/like-checked.svg";
import SealExampleImg from "../../assets/images/seal-example.png";
import { useState } from "react";

const SealListPage = () => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <StyledSealListContainer>
      <StyledSealListInnerContainer>
        <div>씰 게시판</div>
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
        <div>
          <div>
            <img src={SealExampleImg} alt={"씰 사진"} width={"100%"} />
          </div>
          <StyledSealListTitleContainer>
            <div>씰 제목~~</div>
            <StyledSealListLikeWrapper>
              <img src={LikeChecked} alt={"좋아요 수"} />
              <div>19</div>
            </StyledSealListLikeWrapper>
          </StyledSealListTitleContainer>
        </div>
      </StyledSealListInnerContainer>
    </StyledSealListContainer>
  );
};

export default SealListPage;

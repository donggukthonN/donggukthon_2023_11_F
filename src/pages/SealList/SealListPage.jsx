import {
  StyledSealListContainer,
  StyledSealListInnerContainer,
  StyledSealListSearch,
  StyledSealListSearchButton,
  StyledSealListSearchButtonImg,
  StyledSealListSearchWrapper,
} from "./styled";
import { useState } from "react";
import { StyledSimpleHeaderContainer } from "../../styles";
import SealItem from "../../components/SealList/SealItem";

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
        <SealItem />
        <SealItem />
      </StyledSealListInnerContainer>
    </StyledSealListContainer>
  );
};

export default SealListPage;

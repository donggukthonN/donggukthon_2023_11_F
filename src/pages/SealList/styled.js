import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

export const StyledSealListContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledSealListInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  width: 100%;
  max-width: 400px; // 추후 수정!
`;

export const StyledSealListSearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;

export const StyledSealListSearch = styled.input`
  margin: 0 5px;
  padding: 0 20px;
  width: 70%;
  border: none;
  border-radius: 10px;
  border: 1px solid white;
  box-shadow: 1px 2px 1px gray;
`;

export const StyledSealListSearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  padding: 5px;
  border: none;
  background-color: #2d9985;
  border-radius: 50%;
  box-shadow: 1px 2px 1px gray;
`;

export const StyledSealListSearchButtonImg = styled(FaSearch)`
  width: 15px;
  height: 15px;
  color: white;
`;

export const StyledSealListTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledSealListTitle = styled.div``;

export const StyledSealListLikeWrapper = styled.div`
  display: flex;
  align-items: center;
`;

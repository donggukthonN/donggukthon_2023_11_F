import {
  StyledMySealListContainer,
  StyledMySealListCookie1,
  StyledMySealListCookie2,
  StyledMySealListInnerContainer,
  StyledMySealListMenuLeft,
  StyledMySealListMenuRight,
  StyledMySealListMenuWrapper,
} from "./styled";
import { StyledSimpleHeaderContainer } from "../../styles";
import SealItem from "../../components/SealList/SealItem";

const MySealListPage = () => {
  return (
    <StyledMySealListContainer>
      <StyledMySealListInnerContainer>
        <StyledSimpleHeaderContainer>
          내가 만든 보관함
          <StyledMySealListCookie1 />
          <StyledMySealListCookie2 />
        </StyledSimpleHeaderContainer>
        <StyledMySealListMenuWrapper>
          <StyledMySealListMenuLeft>우표</StyledMySealListMenuLeft>
          <StyledMySealListMenuRight>씰</StyledMySealListMenuRight>
        </StyledMySealListMenuWrapper>
        <SealItem />
        <SealItem />
      </StyledMySealListInnerContainer>
    </StyledMySealListContainer>
  );
};

export default MySealListPage;

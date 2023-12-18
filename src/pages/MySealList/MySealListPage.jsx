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
import { useState } from "react";

const MySealListPage = () => {
  const [selectedMenu, setSelectedMenu] = useState(1); // 0 : 우표, 1 : 씰

  const onClickStampList = () => {
    if (selectedMenu === 1) {
      setSelectedMenu(0);
    }
  };

  const onClickSealList = () => {
    if (selectedMenu === 0) {
      setSelectedMenu(1);
    }
  };

  return (
    <StyledMySealListContainer>
      <StyledMySealListInnerContainer>
        <StyledSimpleHeaderContainer>
          내가 만든 보관함
          <StyledMySealListCookie1 />
          <StyledMySealListCookie2 />
        </StyledSimpleHeaderContainer>
        <StyledMySealListMenuWrapper>
          <StyledMySealListMenuLeft
            onClick={onClickStampList}
            $selectedMenu={selectedMenu}
          >
            우표
          </StyledMySealListMenuLeft>
          <StyledMySealListMenuRight
            onClick={onClickSealList}
            $selectedMenu={selectedMenu}
          >
            씰
          </StyledMySealListMenuRight>
        </StyledMySealListMenuWrapper>
        {selectedMenu === 0 ? (
          <></>
        ) : (
          <>
            <SealItem />
            <SealItem />
          </>
        )}
      </StyledMySealListInnerContainer>
    </StyledMySealListContainer>
  );
};

export default MySealListPage;

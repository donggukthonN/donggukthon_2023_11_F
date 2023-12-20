import {
  StyledMySealListContainer,
  StyledMySealListCookie1,
  StyledMySealListCookie2,
  StyledMySealListEmptyText,
  StyledMySealListInnerContainer,
  StyledMySealListMenuLeft,
  StyledMySealListMenuRight,
  StyledMySealListMenuWrapper,
  StyledMyStampListContent,
} from "./styled";
import { StyledSimpleHeaderContainer } from "../../styles";
import SealItem from "../../components/SealList/SealItem";
import { useEffect, useState } from "react";
import { getSealMyList } from "../../api/seal";
import { getStampMyList } from "../../api/stamp";
import StampItem from "../../components/StampList/StampItem";

const MySealListPage = () => {
  const [selectedMenu, setSelectedMenu] = useState(0); // 0 : 우표, 1 : 씰
  const [listData, setListData] = useState(null);

  useEffect(() => {
    const accessCookie = localStorage.getItem("accessCookie");
    if (selectedMenu === 0) {
      // 우표 일때 api 호출
      let data = getStampMyList(accessCookie);
      if (data.status === "SUCCESS") {
        setListData(data.result.stampList);
      } else {
        alert(data.message);
      }
    } else {
      let data = getSealMyList(accessCookie);
      if (data.status === "SUCCESS") {
        setListData(data.result.sealList);
      } else {
        alert(data.message);
      }
    }
  }, [selectedMenu]);
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
          listData && listData !== undefined && listData.length > 0 ? (
            <StyledMyStampListContent>
              {listData.map((item) => (
                <StampItem key={item.id} stampData={item} />
              ))}
            </StyledMyStampListContent>
          ) : (
            <StyledMySealListEmptyText>
              우표 보관함이 비어있습니다.
            </StyledMySealListEmptyText>
          )
        ) : listData && listData !== undefined && listData.length > 0 ? (
          listData.map((item) => <SealItem key={item.id} sealData={item} />)
        ) : (
          <StyledMySealListEmptyText>
            씰 보관함이 비어있습니다.
          </StyledMySealListEmptyText>
        )}
      </StyledMySealListInnerContainer>
    </StyledMySealListContainer>
  );
};

export default MySealListPage;

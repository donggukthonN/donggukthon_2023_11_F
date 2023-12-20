import {
  Root,
  StyledSealListContainer,
  StyledSealListEmptyText,
  StyledSealListInnerContainer,
  StyledSealListSearch,
  StyledSealListSearchButton,
  StyledSealListSearchButtonImg,
  StyledSealListSearchWrapper,
} from "./styled";
import { useEffect, useState } from "react";
import { StyledSimpleHeaderContainer } from "../../styles";
import SealItem from "../../components/SealList/SealItem";
import { getSealList } from "../../api/seal";
import { useNavigate } from "react-router-dom";

const SealListPage = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [sealListData, setSealListData] = useState(null);
  const [sealListSearchData, setSealListSearchData] = useState(null);

  useEffect(() => {
    const accessCookie = localStorage.getItem("accessCookie");
    let data = getSealList(accessCookie);

    if (data.status === "SUCCESS") {
      setSealListData(data.result.sealList);
      setSealListSearchData(data.result.sealList);
    } else {
      alert(data.message);
    }

    // let sealList = [
    //   {
    //     id: 1,
    //     sealImg: "String", //url
    //     sealName: "씰 이름1",
    //     likeCnt: "2",
    //     like: true,
    //   },
    //   {
    //     id: 2,
    //     sealImg: "String", //url
    //     sealName: "씰 이름2",
    //     likeCnt: "3",
    //     like: false,
    //   },
    //   {
    //     id: 3,
    //     sealImg: "String", //url
    //     sealName: "씰 이름3",
    //     likeCnt: "0",
    //     like: false,
    //   },
    // ];
    // setSealListData(sealList);
    // setSealListSearchData(sealList);
  }, []);

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
    setSealListSearchData(
      sealListData.filter((item) =>
        item.sealName.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const onClickSearch = (text) => {
    if (!text || text === undefined || text === "") {
      alert("검색어를 입력해주세요");
    } else {
      setSealListSearchData(
        sealListData.filter((item) =>
          item.sealName.toLowerCase().includes(text.toLowerCase())
        )
      );
    }
  };

  const onClickShowDetail = (id) => {
    navigate(`/sealDetail/${id}`);
  };

  return (
    <Root>
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
            <StyledSealListSearchButton onClick={() => onClickSearch(search)}>
              <StyledSealListSearchButtonImg />
            </StyledSealListSearchButton>
          </StyledSealListSearchWrapper>
          {sealListSearchData &&
          sealListSearchData !== undefined &&
          sealListSearchData.length > 0 ? (
            sealListSearchData.map((item) => (
              <SealItem
                key={item.id}
                sealData={item}
                onClick={() => onClickShowDetail(item.id)}
              />
            ))
          ) : (
            <StyledSealListEmptyText>
              {" "}
              검색 결과가 없습니다.{" "}
            </StyledSealListEmptyText>
          )}
        </StyledSealListInnerContainer>
      </StyledSealListContainer>
    </Root>
  );
};

export default SealListPage;

import {
  Root,
  StyledStampListContainer,
  StyledStampListContent,
  StyledStampListEmptyText,
  StyledStampListHeaderContainer,
  StyledStampListInnerContainer,
  StyledStampListSearch,
  StyledStampListSearchButton,
  StyledStampListSearchButtonImg,
  StyledStampListSearchWrapper,
} from "./styled";
import { useEffect, useState } from "react";
import StampItem from "../../components/StampList/StampItem";
import { getStampList } from "../../api/stamp";
import { useNavigate } from "react-router-dom";

const StampListPage = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [stampListData, setStampListData] = useState(null);
  const [stampListSearchData, setStampListSearchData] = useState(null);

  useEffect(() => {
    const accessCookie = localStorage.getItem("accessCookie");
    let data = getStampList(accessCookie);

    if (data.status === "SUCCESS") {
      setStampListData(data.result.stampList);
      setStampListSearchData(data.result.stampList);
    } else {
      alert(data.message);
    }
    // let stampList = [
    //   {
    //     id: 1,
    //     stampImg: "String", //url
    //     stampName: "우표 이름1",
    //     likeCnt: "2",
    //     like: true,
    //   },
    //   {
    //     id: 2,
    //     stampImg: "String", //url
    //     stampName: "우표 이름2",
    //     likeCnt: "3",
    //     like: false,
    //   },
    //   {
    //     id: 3,
    //     stampImg: "String", //url
    //     stampName: "우표 이름3",
    //     likeCnt: "0",
    //     like: false,
    //   },
    // ];
    // setStampListData(stampList);
    // setStampListSearchData(stampList);
  }, []);

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
    setStampListSearchData(
      stampListData.filter((item) =>
        item.stampName.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const onClickSearch = (text) => {
    if (!text || text === undefined || text === "") {
      alert("검색어를 입력해주세요");
    } else {
      setStampListSearchData(
        stampListData.filter((item) =>
          item.stampName.toLowerCase().includes(text.toLowerCase())
        )
      );
    }
  };

  const onClickShowDetail = (id) => {
    navigate(`/stampDetail/${id}`);
  };

  return (
    <Root>
      <StyledStampListContainer>
        <StyledStampListInnerContainer>
          <StyledStampListHeaderContainer>
            우표 게시판
          </StyledStampListHeaderContainer>
          <StyledStampListSearchWrapper>
            <StyledStampListSearch
              type="text"
              value={search}
              onChange={onChangeSearch}
              placeholder="우표 이름을 검색해주세요."
            />
            <StyledStampListSearchButton onClick={() => onClickSearch(search)}>
              <StyledStampListSearchButtonImg />
            </StyledStampListSearchButton>
          </StyledStampListSearchWrapper>
          {stampListSearchData &&
          stampListSearchData !== undefined &&
          stampListSearchData.length > 0 ? (
            <StyledStampListContent>
              {stampListSearchData.map((item) => (
                <StampItem
                  key={item.id}
                  stampData={item}
                  onClick={() => onClickShowDetail(item.id)}
                />
              ))}
            </StyledStampListContent>
          ) : (
            <StyledStampListEmptyText>
              {" "}
              검색 결과가 없습니다.{" "}
            </StyledStampListEmptyText>
          )}
        </StyledStampListInnerContainer>
      </StyledStampListContainer>
    </Root>
  );
};

export default StampListPage;

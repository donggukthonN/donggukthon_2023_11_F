import styled from "styled-components";
import LikeChecked from "../../assets/icon/like-checked.svg";
import LikeUnchecked from "../../assets/icon/like-unchecked.svg";
import frame from "../../assets/icon/stamp_frame.svg";
import question from "../../assets/icon/no_image.svg";
import { useRecoilState } from "recoil";
import { selectState } from "../../stores/select-state";
import { useEffect, useState } from "react";

const StampItem = ({ stampData }) => {
  const [selectItem, setSelectItem] = useRecoilState(selectState);
  const [isClicked, setIsClicked] = useState(false);

  const selectFunc = (item) => {
    setIsClicked(!isClicked);
    setSelectItem({
      id: item?.id,
      stampImg: item?.stampImg,
      stampName: item?.stampName,
      likeCnt: item?.likeCnt,
      like: item?.like,
    });
  };
  useEffect(() => {
    if (!isClicked) {
      setSelectItem(null);
    } else {
      console.log(selectItem);
    }
  }, [isClicked]);
  return (
    <Container>
      <Frame onClick={() => selectFunc(stampData)} $click={isClicked}>
        <Image src={question}></Image>
      </Frame>
      <StyledStampItemTitleContainer>
        <StyledStampItemTitle>{stampData.stampName}</StyledStampItemTitle>
        <StyledStampItemLikeWrapper>
          {stampData.like ? (
            <img
              src={LikeChecked}
              alt={"좋아요 수"}
              style={{ height: "15px" }}
            />
          ) : (
            <img
              src={LikeUnchecked}
              alt={"좋아요 수"}
              style={{ height: "15px" }}
            />
          )}
          <div style={{ color: "#992d2d" }}>{stampData.likeCnt}</div>
        </StyledStampItemLikeWrapper>
      </StyledStampItemTitleContainer>
    </Container>
  );
};

export default StampItem;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Frame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  background-image: url(${frame});
  opacity: ${(props) => (props.$click ? "0.5" : "1")};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; /*반복 방지*/
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
`;

const StyledStampItemTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  width: 70%;
`;

const StyledStampItemTitle = styled.div`
  font-size: 12px;
`;

const StyledStampItemLikeWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 10px;
`;

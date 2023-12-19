import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Row from "./Row";
import { getCheckRoomMaker } from "../../api/canvas";
import { useNavigate, useParams } from "react-router-dom";
import html2canvas from "html2canvas";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const RowContainer = styled.div`
  margin: 2rem 0.5rem;
  border: 1px dotted #9e9e9e;
`;

const StyledStampMakingButton = styled.button`
  margin: 10px auto;
  padding: 5px 0;
  width: 200px;
  border: none;
  border-radius: 20px;
  color: white;
  background-color: #992d2d;
  box-shadow: 1px 2px 1px gray;
  font-size: 20px;
`;

const DrawingPanel = ({
  width,
  height,
  selectedColor,
  colorData,
  timeout,
  changedColor,
}) => {
  const panelRef = useRef();
  const params = useParams();
  const navigate = useNavigate();

  const [canDraggable, setCanDraggable] = useState(false);

  useEffect(() => {
    if (timeout) {
      onClickFinish();
    }
  }, [timeout]);

  const onClickFinish = async () => {
    // 사진 캡쳐해서 저장
    if (!panelRef.current) return;

    try {
      const div = panelRef.current;
      const canvas = await html2canvas(div, { scale: 2 });
      // 이거 canvas를 저장하기 recoil에다가!
    } catch (error) {
      console.error("Error converting div to image:", error);
    }

    let data = getCheckRoomMaker(params.id, "accessCookie값 넣기");
    if (data.status === "SUCCESS") {
      if (data.result.roomMaker) {
        navigate(`/stampNaming`); // 팀장일 때
      } else {
        navigate(`/loading`);
      }
    } else if (data.status === "FAILED") {
      alert(data.message);
    }
  };

  let rows = [];

  for (let i = 0; i < height; i++) {
    rows.push(
      <Row
        key={i}
        xCoordinate={i}
        width={width}
        selectedColor={selectedColor}
        canDraggable={canDraggable}
        changedColor={changedColor}
        colorData={colorData}
      />
    );
  }

  return (
    <Container>
      <RowContainer
        ref={panelRef}
        onPointerDownCapture={() => setCanDraggable(true)}
        onPointerUpCapture={() => setCanDraggable(false)}
        //onPointerLeaveCapture={() => setCanDraggable(false)}
      >
        {rows}
      </RowContainer>
      <StyledStampMakingButton onClick={onClickFinish}>
        완성하기
      </StyledStampMakingButton>
    </Container>
  );
};

export default DrawingPanel;

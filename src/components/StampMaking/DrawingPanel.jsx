import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Row from "./Row";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const RowContainer = styled.div`
  margin: 2rem;
  border: 1px dotted #9e9e9e;
`;

const DrawingPanel = ({ width, height, selectedColor, colorData }) => {
  const panelRef = useRef();

  const [canDraggable, setCanDraggable] = useState(false);
  const [changedColor, setChangedColor] = useState({
    xCoordinate: 1,
    yCoordinate: 2,
    color: "black",
  });

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
    </Container>
  );
};

export default DrawingPanel;

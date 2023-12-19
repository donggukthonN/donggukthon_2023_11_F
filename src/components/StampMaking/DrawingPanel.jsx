import { useRef, useState } from "react";
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

const DrawingPanel = ({ width, height, selectedColor }) => {
  const panelRef = useRef();

  const [canDraggable, setCanDraggable] = useState(false);

  let rows = [];

  for (let i = 0; i < height; i++) {
    rows.push(
      <Row
        key={i}
        xCoordinate={i}
        width={width}
        selectedColor={selectedColor}
        canDraggable={canDraggable}
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

import styled from "styled-components";
import Pixels from "./Pixels";

const Container = styled.div`
  display: flex;
  width: fit-content;
`;

const Row = ({ xCoordinate, width, selectedColor, canDraggable }) => {
  let pixels = [];

  for (let i = 0; i < width; i++) {
    pixels.push(
      <Pixels
        key={i}
        yCoordinate={i}
        xCoordinate={xCoordinate}
        selectedColor={selectedColor}
        canDraggable={canDraggable}
      />
    );
  }

  return <Container>{pixels}</Container>;
};

export default Row;

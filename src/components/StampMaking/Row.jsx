import styled from "styled-components";
import Pixels from "./Pixels";
import { useEffect } from "react";

const Container = styled.div`
  display: flex;
  width: fit-content;
`;

const Row = ({
  xCoordinate,
  width,
  selectedColor,
  canDraggable,
  changedColor,
  colorData,
}) => {
  let pixels = [];

  for (let i = 0; i < width; i++) {
    pixels.push(
      <Pixels
        key={i}
        yCoordinate={i}
        xCoordinate={xCoordinate}
        selectedColor={selectedColor}
        canDraggable={canDraggable}
        changedColor={changedColor}
        colorData={colorData}
      />
    );
  }

  return <Container>{pixels}</Container>;
};

export default Row;

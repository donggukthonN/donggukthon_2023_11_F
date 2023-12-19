import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 1.3rem;
  height: 1.3rem;
  //border: 1px dotted #9e9e9e;
  &:hover {
    cursor: pointer;
  }
`;

const Pixels = ({ xCoordinate, yCoordinate, selectedColor, canDraggable }) => {
  //let initialColor = colorArray[xCoordinate][yCoordinate]; // 나중에 useState로 바꾸기
  const [pixelColor, setPixelColor] = useState("#ffffff"); // 2차원 배열에서 특정 위치에 해당하는 값을 초기값으로!

  useEffect(() => {
    let changeColorData = {
      // 더미데이터 나중에 삭제해!
      xCoordinate: 0,
      yCoordinate: 0,
      color: "red",
    };
    // 나중에 소켓 연결하고 함수로 바꾸기
    changeColorOther(changeColorData);
  }, []);

  const changeColorOther = (changeColorData) => {
    // 나중에 소켓 연결하고 해보기
    if (
      xCoordinate === changeColorData.xCoordinate &&
      yCoordinate === changeColorData.yCoordinate
    ) {
      setPixelColor(changeColorData.color);
      //setCanChangeColor(false);
    }
  };

  const applyColor = () => {
    setPixelColor(selectedColor);
    console.log("색상 변경 : ", xCoordinate, yCoordinate, selectedColor);
  };

  const applyColorDragged = () => {
    console.log("이동");
    if (canDraggable) {
      setPixelColor(selectedColor);
      //setCanChangeColor(false);
      console.log("색상 변경 : ", xCoordinate, yCoordinate, selectedColor);
    }
  };

  return (
    <Container
      //onClick={applyColor}
      onPointerDownCapture={applyColor}
      onPointerEnter={applyColorDragged}
      style={{ backgroundColor: pixelColor }}
    ></Container>
  );
};

export default Pixels;

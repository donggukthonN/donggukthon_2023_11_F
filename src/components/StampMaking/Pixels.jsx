import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 1.3rem;
  height: 1.3rem;
  //border: 1px dotted #9e9e9e;
  &:hover {
    cursor: pointer;
  }
`;

const Pixels = ({
  xCoordinate,
  yCoordinate,
  selectedColor,
  canDraggable,
  changedColor,
  colorData,
  stompClientRef,
}) => {
  const params = useParams();

  let initialColor = colorData[xCoordinate][yCoordinate]; // 나중에 useState로 바꾸기
  const [pixelColor, setPixelColor] = useState(initialColor); // 2차원 배열에서 특정 위치에 해당하는 값을 초기값으로!

  useEffect(() => {
    // 나중에 소켓 연결하고 함수로 바꾸기
    changeColorOther(changedColor);
  }, [changedColor]);

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
    const accessCookie = localStorage.getItem("accessCookie");
    sendHandler(accessCookie);
    console.log("색상 변경 : ", xCoordinate, yCoordinate, selectedColor);
  };

  const applyColorDragged = () => {
    console.log("이동");
    if (canDraggable) {
      setPixelColor(selectedColor);
      //setCanChangeColor(false);
      const accessCookie = localStorage.getItem("accessCookie");
      sendHandler(accessCookie);
      console.log("색상 변경 : ", xCoordinate, yCoordinate, selectedColor);
    }
  };

  // 소켓 통신
  const sendHandler = (accessCookie) => {
    if (!stompClientRef.current || !stompClientRef.current.connected) {
      console.error(
        "WebSocket connection is not established. Please connect first."
      );
      return;
    }

    const canvasRequest = {
      xCoordinate: xCoordinate,
      yCoordinate: yCoordinate,
      color: pixelColor,
    };

    stompClientRef.current.send(
      `/topic/canvas/${params.id}`,
      {
        Authorization: `Bearer ${accessCookie}`,
      },
      JSON.stringify(canvasRequest) // 헤더도.. 추가 필요해..
    );
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

import { useState } from "react";
import { ChromePicker, CirclePicker } from "react-color";
import styled from "styled-components";
import { IoColorPaletteSharp } from "react-icons/io5";
import { BsEraserFill } from "react-icons/bs";

const ChooseColor = ({ selectedColor, onChangeColor }) => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  //const [chooseEraser, setChooseEraser] = useState(false);
  // 마우스 눌렸을 때 스타일 변화시켰다가 다른 데 눌리면 해제하고 싶당..

  const popover = {
    position: "absolute",
    zIndex: "2",
  };
  const cover = {
    position: "fixed",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
  };

  const handleClick = () => {
    setDisplayColorPicker(true);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const onClickEraser = () => {
    onChangeColor(eraseColor);
    //setChooseEraser(true);
  };

  let eraseColor = { hex: "#ffffff" }; // 나중에 지우개 버튼 선택 되었을 때 지우게 버튼 색상도 변경되도록 하기!
  return (
    <Container>
      <CirclePicker color={selectedColor} onChangeComplete={onChangeColor} />
      <ButtonContainer>
        <Button onClick={onClickEraser}>
          <BsEraserFill style={{ fontSize: "20px" }} />
        </Button>
        <Button onClick={handleClick}>
          <IoColorPaletteSharp style={{ fontSize: "20px" }} />
        </Button>
      </ButtonContainer>
      {displayColorPicker ? (
        <div style={popover}>
          <div style={cover} onClick={handleClose} />
          <ChromePicker
            color={selectedColor}
            onChangeComplete={onChangeColor}
          />
        </div>
      ) : null}
    </Container>
  );
};

export default ChooseColor;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 30px;
  background-color: white;
`;

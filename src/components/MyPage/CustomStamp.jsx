import styled from "styled-components";
import frame from "../../assets/icon/stamp_frame.svg";
import question from "../../assets/icon/no_image.svg";

//우표 프레임 만드는 함수입니다.
const CustomStamp = ({ userId }) => {
  return (
    <Frame>
      <Image src={question}></Image>
    </Frame>
  );
};

export default CustomStamp;

const Frame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 206px;
  height: 206px;
  background-image: url(${frame});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; /*반복 방지*/
  // background-color: white;
`;

const Image = styled.img`
  width: 90px;
  height: 130px;
`;

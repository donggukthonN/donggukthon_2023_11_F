import styled from "styled-components";
import frame from "../../assets/images/stamp-frame.svg";
import stamp from "../../assets/images/stamp-example.png";

const StampImg = ({ userId }) => {
  return (
    <Container>
      <Image src={stamp} />
      <Frame src={frame} />
    </Container>
  );
};

export default StampImg;

const Container = styled.div`
  position: relative;
  margin: 10px 0;
`;

const Image = styled.img`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  width: 165px;
  height: 165px;
  //background-image: url(${frame});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; /*반복 방지*/
  // background-color: white;
`;

const Frame = styled.img`
  position: absolute;
  left: -15px;
  top: -20px;
  /* top: 22px;
  left: 18px; */
  width: 200px;
  height: 200px;
`;

import styled from "styled-components";
import frame from '../../assets/icon/stamp_frame.svg';
import question from '../../assets/icon/no_image.svg';

const CustomStamp = ({userId}) => {
  return(
    <Container>
      <Frame>
        <Image src={question}>
        </Image>
      </Frame>
    </Container>
  );
};

export default CustomStamp;


const Container = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 730px;
  border: 1px solid black;
  background-color: #FFF6D4;
`;

const Frame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black; 
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
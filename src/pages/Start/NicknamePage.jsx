import {
  Container,
  ImageContainer,
  Info,
  CheckBox,
  InputBox,
  CheckButton,
  SubmitBtn
} from './styled';
import santa from '../../assets/icon/santa.svg';
import christmas from '../../assets/icon/christmas.svg';
import next from '../../assets/icon/next_btn.svg';

const NicknamePage = () => {
  return(
    <Container>
      <ImageContainer>
        <img src={santa} style={{width: 100, height: 161}}/>
        <img src={christmas} style={{width: 111, height: 181, marginLeft: 28}}/>
      </ImageContainer>
      <Info>
        <text style={{color: '#F00'}}>닉네임</text>
        <text  style={{color: '#2D9985', fontFamily:'YClover-regular'}}>을 입력하세요 !</text>
      </Info>
      <CheckBox>
        <InputBox placeholder='예) 김동국'></InputBox>
        <CheckButton>중복확인</CheckButton>
      </CheckBox>
      <SubmitBtn>둘러보기 <img src={next} style={{marginLeft: 10}}/></SubmitBtn>
    </Container>
  );
};

export default NicknamePage;
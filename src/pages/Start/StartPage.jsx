import {
  Container,
  Introduce,
  Title,
  ProjectName,
  SignIn,
  SnowyFloor
} from './styled';
import snowy from '../../assets/icon/snowy_floor.svg';

const StartPage = () => {
  return (
    <Container className='container'>
      <div style={{display: 'flex', justifyContent: 'center', marginTop: 72}}>
        <ProjectName>
          RED NOSE
        </ProjectName>
      </div>
      <div style={{ marginTop: 68}}>
        <Introduce>
          다같이 씰도 만들고, <br/>
          기부도 하자!
        </Introduce>
        <Title>
          나만의 씰만들기
        </Title>
      </div>
      <SignIn>카카오 계정으로 로그인하기</SignIn>
    </Container>
  );
};

export default StartPage;

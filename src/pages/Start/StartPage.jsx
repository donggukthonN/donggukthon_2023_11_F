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
    <Container>
      <ProjectName>
        RED NOSE
      </ProjectName>
      <Introduce>
        다같이 씰도 만들고, <br/>
        기부도 하자!
      </Introduce>
      <Title>
        나만의 씰만들기
      </Title>

      <SignIn></SignIn>
      <SnowyFloor src={snowy} />
    </Container>
  );
};

export default StartPage;

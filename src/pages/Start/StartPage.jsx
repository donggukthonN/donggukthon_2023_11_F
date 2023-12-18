import {
  Container,
  Introduce,
  Title,
  ProjectName
} from './styled';

const StartPage = () => {
  return (
    <Container>
      <Introduce>
        다같이 씰도 만들고, <br/>
        기부도 하자!
      </Introduce>
      <Title>
        나만의 씰만들기
      </Title>
      <ProjectName>
        RED NOSE
      </ProjectName>
    </Container>
  );
};

export default StartPage;

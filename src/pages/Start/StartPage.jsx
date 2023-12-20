import axios from 'axios';
import {
  Container,
  Introduce,
  Title,
  ProjectName,
  SignIn,
} from './styled';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const StartPage = () => {
  const location = useLocation();
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://app.embed.im/snow.js';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [location]);

  const kakaoLogin = () => {
    // window.location.href = `https://red-nosed.com/oauth2/authorization/kakao`;
    try{
      window.location.href = `https://red-nosed.com/oauth2/authorization/kakao`;
    }catch(error){
      console.error(error);
    }
    
  };

  return (
    <Container>
      <div style={{display: 'flex', justifyContent: 'center', marginTop: 72}}>
        <ProjectName>
          RED NOSE
        </ProjectName>
      </div>
      <div style={{ marginTop: 68, width: 276}}>
        <Introduce>
          다같이 씰도 만들고, <br/>
          기부도 하자!
        </Introduce>
        <Title>
          나만의 씰만들기
        </Title>
      </div>
      <SignIn onClick={kakaoLogin} >카카오 계정으로 로그인하기</SignIn>
    </Container>
  );
};

export default StartPage;

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
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getInfo, nameCheck } from '../../api/user';

const NicknamePage = () => {
  const [name, setName] = useState('');
  const token = localStorage.getItem('accessCookie');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://app.embed.im/snow.js';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const navigate = useNavigate();
  const nickNamePut = (e) => {
    setName(e.target.value);
  };
  const checkBtn = () => {
    let data = {
      nickname: name
    };
    // console.log(name);
    nameCheck(token, name);
  }
  const nextBtn = () => {
    getInfo({nickname: name});
    navigate('/mypage');
  };

  return(
    <Container>
      <ImageContainer>
        <img src={santa} style={{width: 100, height: 161}}/>
        <img src={christmas} style={{width: 111, height: 181, marginLeft: 28}}/>
      </ImageContainer>
      <Info>
        <span style={{color: '#F00'}}>닉네임</span>
        <span  style={{color: '#2D9985', fontFamily:'YClover-regular'}}>을 입력하세요 !</span>
      </Info>
      <CheckBox>
        <InputBox placeholder='예) 김동국' onChange={nickNamePut}></InputBox>
        <CheckButton onClick={checkBtn}>중복확인</CheckButton>
      </CheckBox>
      <SubmitBtn onClick={nextBtn}>둘러보기 <img src={next} style={{marginLeft: 10}}/></SubmitBtn>
    </Container>
  );
};

export default NicknamePage;
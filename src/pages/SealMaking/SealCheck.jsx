import styled from "styled-components";
import background from '../../assets/icon/background.svg';
import exampleSeal from '../../assets/icon/example_seal.svg';

const SealCheck = () => {
  return(
    <Container>
      <IntroText>씰이 완성되었어요 !</IntroText>
      <img src={exampleSeal} style={{marginTop: 70}}/>
      <div style={{marginTop: 41, fontSize: 25, fontFamily: 'YClover-regular', fontWeight: 600, textAlign: 'center'}}>
        2023 크리스마스 씰이 <br/> <span style={{color: '#2D9985'}}>씰 게시판</span>에 등록되었습니다.
      </div>
      <button style={{backgroundColor: '#2D9985', width: 160, height: 48, color: 'white', marginTop: 26, borderRadius: 50, border: 'none', fontSize: 20}}>
        구경하러 가기
      </button>
    </Container>
  );
};

export default SealCheck;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-position: center;
  align-items: center;
  height: 749px;
  width: 400px;
  background-image: url(${background});
  background-size: cover;
`; 

const IntroText = styled.div`
  margin-top: 66px;
  color: white;
  font-size: 25px;
`;


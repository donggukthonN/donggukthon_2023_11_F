import styled from "styled-components";
import background from '../../assets/icon/background.svg';
import exampleSeal from '../../assets/icon/example_seal.svg';

const SealComplete = () => {
  return(
    <Container>
      <IntroText>씰이 완성되었어요 !</IntroText>
      <img src={exampleSeal} style={{marginTop: 70}}/>
      <div style={{marginTop: 41, fontSize: 25, fontFamily: 'YClover-regular', fontWeight: 600}}>이름을 붙여주세요 !</div>
      <input style={{borderRadius: 50, marginTop: 21, height: 58, width: 285, border: 'none'}}/>
      <button style={{backgroundColor: '#2D9985', width: 149, height: 48, color: 'white', marginTop: 26, borderRadius: 50, border: 'none', fontSize: 20}}>저장완료</button>
    </Container>
  );
};

export default SealComplete;

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


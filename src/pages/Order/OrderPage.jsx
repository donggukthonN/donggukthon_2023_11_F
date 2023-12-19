import styled from "styled-components";
import background from '../../assets/icon/background.svg';
import exampleSeal from '../../assets/icon/example_seal.svg';

const OrderPage = () => {
  return(
    <Container>
      <IntroText>주문서</IntroText>
      <img src={exampleSeal} style={{marginTop: 70}}/>
      <div style={{marginTop: 41, fontFamily: 'YClover-bold', flexDirection: 'column'}}>
        몇 장 제작하시나요?
        <input/>
      </div>
      <div>어디로 보내드릴까요?</div>
      <input style={{borderRadius: 50, marginTop: 21, height: 40, width: 285, border: 'none'}}/>
      <button style={{backgroundColor: '#2D9985', width: 149, height: 48, color: 'white', marginTop: 26, borderRadius: 50, border: 'none', fontSize: 20}}>다음</button>
    </Container>
  );
};

export default OrderPage;

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


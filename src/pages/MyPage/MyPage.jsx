import { 
  Container,
  LeftBtn,
  RightBtn,
  OrderDiv,
  OrderImg,
  OrderText,
  MainContainer
} from './styled';
import { useRecoilState } from "recoil";
import { stampState } from "../../stores/stamp-state";
import santaHat from '../../assets/icon/santa_hat.svg';
import MyStamp from "../../components/MyPage/MyStamp";
import MySeal from "../../components/MyPage/MySeal";

//api로 number 불러오기
const number = 0;

const MyPage = () => {
  const [stamp, setStamp] = useRecoilState(stampState);
  const [accessCookie] = useCookies(["accessCookie"]);
  const [refreshCookie] = useCookies(["refreshCookie"]);
  localStorage.setItem("accessCookie", accessCookie.accessCookie); //이건 토큰재발급 코드 테스트용
  localStorage.setItem("refreshCookie", refreshCookie.refreshCookie); //이건 토큰재발급 코드 테스트용
  const token = localStorage.getItem("accessCookie");

  const handleStamp = () => {
    setStamp(true);
  };
  const handleSeal = () => {
    setStamp(false);
  };
  
  return(
    <Container style={{backgroundColor: '#FFF6D4', maxHeight: 693}}>
      <div style={{display: 'flex', flexDirection: 'row', marginLeft: 25, marginTop: 36}}> 
        <LeftBtn onClick={handleStamp} $stamp={stamp}>우표</LeftBtn>
        <RightBtn onClick={handleSeal} $stamp={stamp}>씰</RightBtn>
        <OrderDiv>
          <OrderImg src={santaHat}/>
          <OrderText>{number} 장 제작했어요 !</OrderText>
        </OrderDiv>
      </div>
      <MainContainer>
        {stamp ? 
          <MyStamp/>
        : <MySeal/>}
      </MainContainer>
    </Container>
  );
};

export default MyPage;
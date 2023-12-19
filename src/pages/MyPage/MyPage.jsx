import MenuBar from "../../components/common/MenuBar";
import { 
  Container,
  ListContainer,
  LeftBtn,
  RightBtn
} from './styled';
import { useRecoilState } from "recoil";
import { stampState } from "../../stores/stamp-state";

const MyPage = () => {
  const [stamp, setStamp] = useRecoilState(stampState);
  const handleStamp = () => {
    setStamp(true);
  };
  const handleSeal = () => {
    setStamp(false);
  };
  return(
    <Container style={{backgroundColor: '#FFF6D4'}}>
      <div style={{display: 'flex', flexDirection: 'row', marginLeft: 25, marginTop: 36}}> 
        <LeftBtn onClick={handleStamp} $stamp={stamp}>우표</LeftBtn>
        <RightBtn onClick={handleSeal} $stamp={stamp}>씰</RightBtn>
      </div>
    </Container>
  );
};

export default MyPage;
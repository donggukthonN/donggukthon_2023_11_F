import { 
  Root,
  SealContainer,
  ButtonLayer,
  Button
} from './styled';
import sealGroup from '../../assets/icon/seal_group.svg';
import SealForU from '../../components/SealMaking/SealForU';
import { useNavigate } from 'react-router';

const SealMaking = () => {
  const navigate = useNavigate();
  const handleQuit = () => {
    alert('지금 나가시면 변경사항이 저장되지 않습니다.\n 나가시겠습니까?');
    navigate(-1);
  };
  return(
    <Root>
      <img src={sealGroup} style={{marginTop: 14}}/>
      <div style={{fontSize: 30, color: '#992D2D'}}>씰 제작소 </div>
      <div style={{fontFamily: 'YClover-regular', marginTop: 16}}>나만의 크리스마스씰을 만들어봐요 !</div>
      <SealContainer>
        <SealForU />
        <ButtonLayer>
          <Button style={{backgroundColor:'#992D2D'}} onClick={handleQuit}>그만두기</Button>
          <Button style={{backgroundColor: '#2D9985'}}>완성하기</Button>
        </ButtonLayer>
      </SealContainer>
    </Root>
  );
};

export default SealMaking;
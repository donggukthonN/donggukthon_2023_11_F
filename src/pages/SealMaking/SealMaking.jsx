import { 
  Root,
  SealContainer,
  ButtonLayer,
  Button
} from './styled';
import sealGroup from '../../assets/icon/seal_group.svg';
import SealForU from '../../components/SealMaking/SealForU';

const SealMaking = () => {
  return(
    <Root>
      <img src={sealGroup} style={{marginTop: 14}}/>
      <div style={{fontSize: 30, color: '#992D2D'}}>씰 제작소 </div>
      <div style={{fontFamily: 'YClover-regular', marginTop: 16}}>나만의 크리스마스씰을 만들어봐요 !</div>
      <SealContainer>
        <SealForU />
        <ButtonLayer>
          <Button style={{backgroundColor:'#992D2D'}}>그만두기</Button>
          <Button style={{backgroundColor: '#2D9985'}}>완성하기</Button>
        </ButtonLayer>
      </SealContainer>
    </Root>
  );
};

export default SealMaking;
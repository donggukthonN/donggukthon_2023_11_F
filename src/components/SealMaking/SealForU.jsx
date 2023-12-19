import {
  SealBox,
  AllSeal,  
  SealDiv
} from './styled';
import imagePlus from '../../assets/icon/image_plus_btn.svg';

const SealForU = () => {
  return(
    <div>
      <SealDiv>
        <AllSeal>
          {Array(4).fill().map((item, index) => (
            <SealBox key={index} style={{marginTop: 50}}>
              <img src={imagePlus} style={{width: 25, height: 25}}/>
            </SealBox>
          ))}
        </AllSeal>
        <AllSeal>
          {Array(4).fill().map((item, index) => (
            <SealBox key={index}>
              <img src={imagePlus} style={{width: 25, height: 25}}/>
            </SealBox>
          ))}
        </AllSeal>
      </SealDiv>
    </div>
  );
};

export default SealForU;
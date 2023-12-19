import { 
  Root,
  TabBar,
  SButton1,
  SButton2,
  SButton3,
  ListContainer,
  Submit
} from "./styled";
import { useState } from "react";
import SealForStamp from "../StampList/SealForStamp";

// default - like - mine
const SealAdd = () => {
  const [isStatus, setIsStatus] = useState('default');
  return(
    <Root>
      <div style={{color: '#992D2D', marginTop: 24, fontSize: 27}}>우표 보관함</div>
      <TabBar>
        <SButton1 style={{borderRadius: '8px 0 0 8px'}} onClick={()=>setIsStatus('default')} $isStatus={isStatus}>
          전체
        </SButton1>
        <SButton2 onClick={()=>setIsStatus('like')} $isStatus={isStatus}>
          좋아요
        </SButton2>
        <SButton3 style={{borderRadius: '0 8px 8px 0'}} onClick={()=>setIsStatus('mine')} $isStatus={isStatus}>
          MY
        </SButton3>
      </TabBar>
      {/* 리코일로 하나만 선택할 수 있게끔 */}
      <ListContainer>
        {/* 스탬프 데이터  default - like - my 별로 전송 */}
        <SealForStamp />
      </ListContainer>
      <Submit>선택완료</Submit>
    </Root>
  );
};

export default SealAdd;
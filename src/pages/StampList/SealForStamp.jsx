import{ 
  StyledStampListContainer,
  StyledStampListContent,
  StyledStampListInnerContainer,
} from './styled';
import { useEffect, useState } from "react";
import StampItem from "../../components/StampList/StampItem";
import { useRecoilState } from 'recoil';
import { selectState } from '../../stores/select-state';

const SealForStamp = () => {
  const [stampListData, setStampListData] = useState(null);
  const [selectItem, setSelectedItem] = useRecoilState(selectState);

  useEffect(()=>{
    let stampList = [
      {
        id: 1,
        stampImg: "String", //url
        stampName: "우표 이름1",
        likeCnt: "2",
        like: true,
      },
      {
        id: 2,
        stampImg: "String", //url
        stampName: "우표 이름2",
        likeCnt: "3",
        like: false,
      },
      {
        id: 3,
        stampImg: "String", //url
        stampName: "우표 이름3",
        likeCnt: "0",
        like: false,
      },
    ];
    setStampListData(stampList);
  
  }, []);

  const selectFunc = (item) => {
    setSelectedItem({
      id: item?.id,
      stampImg: item?.stampImg,
      stampName: item?.stampName,
      likeCnt: item?.likeCnt,
      like: item?.like
    });
  };

  return(
    <StyledStampListContainer>
      <StyledStampListInnerContainer>
        <StyledStampListContent>
          {stampListData?.map((item) => (
            <div key={item.id} onClick={()=>selectFunc(item)}>
              <StampItem stampData={item} />
            </div>
          ))}
        </StyledStampListContent>
      </StyledStampListInnerContainer>
    </StyledStampListContainer>
  );
};

export default SealForStamp;
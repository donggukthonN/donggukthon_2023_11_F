import{ 
  StyledStampListContainer,
  StyledStampListContent,
  StyledStampListInnerContainer,
} from './styled';
import { useEffect, useState } from "react";
import StampItem from "../../components/StampList/StampItem";

const SealForStamp = () => {
  const [stampListData, setStampListData] = useState(null);

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

  return(
    <StyledStampListContainer>
      <StyledStampListInnerContainer>
        <StyledStampListContent>
          {stampListData?.map((item) => (
            <StampItem key={item.id} stampData={item} />
          ))}
        </StyledStampListContent>
      </StyledStampListInnerContainer>
    </StyledStampListContainer>
  );
};

export default SealForStamp;
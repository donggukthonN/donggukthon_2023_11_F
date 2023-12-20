import { SealBox, AllSeal, SealDiv } from "./styled";
import imagePlus from "../../assets/icon/image_plus_btn.svg";
import { useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import { selectState } from "../../stores/select-state";

const SealForU = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useRecoilState(selectState);
  const gridItems = [];
  for (let i=0; i<2; i++){
    gridItems[i] = Array(8).fill().slice(i * 4, (i+1) * 4);
  }
  const custom = (item) => {
    console.log(item.key);
    localStorage.setItem('key', item.key);
    navigate(`/mypage/sealadd`)
  };
  return (
    <div>
      <SealDiv>
        {/* <div style={{ border: '1px solid black'}}> */}
            {gridItems.map((row, rowIndex) => (
              <AllSeal key={rowIndex} >
                {row.map((item, index) => (
                  <SealBox
                  key={index}
                  onClick={()=>custom({
                    key: (rowIndex)*4 + index
                  })}>
                    {parseInt(selectedItem.index) === 4*rowIndex+index ? 
                    <img
                      src={selectedItem.stampImg}
                      style={{ width: 25, height: 25 }}
                      alt="custom"
                    />
                    :
                    <img
                      src={imagePlus}
                      style={{ width: 25, height: 25 }}
                      alt="plus"
                    />}
                  </SealBox>
                ))}
              </AllSeal>
            ))}
        {/* </div> */}
      </SealDiv>
    </div>
  );
};

export default SealForU;

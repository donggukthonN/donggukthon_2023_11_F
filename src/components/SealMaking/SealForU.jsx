import { SealBox, AllSeal, SealDiv } from "./styled";
import imagePlus from "../../assets/icon/image_plus_btn.svg";
import { useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import { selectState } from "../../stores/select-state";

const SealForU = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useRecoilState(selectState);

  return (
    <div>
      <SealDiv>
        <AllSeal>
          {Array(4)
            .fill()
            .map((item, index) => (
              <SealBox
                key={index}
                style={{ marginTop: 50 }}
                onClick={() => navigate(`/mypage/sealadd`)}
              >
                <img
                  src={imagePlus}
                  style={{ width: 25, height: 25 }}
                  alt="plus"
                />
              </SealBox>
            ))}
        </AllSeal>
        <AllSeal>
          {Array(4)
            .fill()
            .map((item, index) => (
              <SealBox key={index}>
                <img
                  src={imagePlus}
                  style={{ width: 25, height: 25 }}
                  alt="plus"
                />
              </SealBox>
            ))}
        </AllSeal>
      </SealDiv>
    </div>
  );
};

export default SealForU;

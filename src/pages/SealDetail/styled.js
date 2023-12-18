import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";

export const StyledSealDetailContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const StyledSealDetailInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  width: 100%;
  max-width: 400px; // 추후 수정!
`;

export const StyledSealDetailHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px 0;
  //border-bottom: 3px solid white;
`;

export const StyledSealDetailHeaderIcon = styled(IoIosArrowBack)`
  width: 20px;
  height: 20px;
  padding-right: 10px;
`;

export const StyledSealDetailHeaderTitle = styled.div`
  font-size: 20px;
`;

export const StyledSealDetailImgWrapper = styled.div`
  margin: 10px 30px;
  //width: 100%;
`;

export const StyledSealDetailTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledSealDetailLikeWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledSealDetailContentWrapper = styled.div`
  margin: 10px 0px;
  padding: 10px;
  border-radius: 5px;
  background-color: aliceblue;
`;

export const StyledSealDetailButton = styled.button`
  margin: 0 auto;
  padding: 5px 0;
  width: 200px;
  border: none;
  border-radius: 20px;
  color: white;
  background-color: #2d9985;
  box-shadow: 1px 2px 1px gray;
`;

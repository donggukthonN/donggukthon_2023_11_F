import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";
import { LiaUserFriendsSolid } from "react-icons/lia";

export const StyledSealDetailContainer = styled.div`
  display: flex;
  justify-content: center;
  /* background-image: url("./assets/images/background-blur.svg");
  background-repeat: no-repeat;
  background-size: cover; */
  //background-color: #fff7e3;
  background-color: #fff0e3;
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
  padding: 0 10px;
`;

export const StyledSealDetailLikeWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledSealDetailContentContainer = styled.div`
  margin: 10px 0px;
  padding: 20px;
  border-radius: 5px;
  background-color: #992d2d;
`;

export const StyledSealDetailContentWrapper = styled.div`
  display: flex;
  color: white;
`;

export const StyledSealDetailDateIcon = styled(CiCalendarDate)`
  padding-right: 5px;
  width: 20px;
  height: 20px;
  color: black;
`;
export const StyledSealDetailFriendIcon = styled(LiaUserFriendsSolid)`
  padding-right: 5px;
  width: 20px;
  height: 20px;
  color: black;
`;

export const StyledSealDetailContentText = styled.p`
  padding-bottom: 10px;
  border-bottom: 2px solid black;
  color: white;
`;

export const StyledSealDetailButton = styled.button`
  margin: 10px auto;
  padding: 5px 0;
  width: 200px;
  border: none;
  border-radius: 20px;
  color: white;
  background-color: #2d9985;
  box-shadow: 1px 2px 1px gray;
  font-size: 20px;
`;

import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { BsCalendarDateFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";

export const StyledSealDetailContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #fff6d4;
  font-size: 17px;
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
  margin: 10px;
  padding: 10px 0;
  font-size: 20px;
  //border-bottom: 3px solid white;
`;

export const StyledSealDetailHeaderIcon = styled(IoIosArrowBack)`
  font-size: 30px;
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
  margin-top: 30px;
  padding: 0 10px;
  color: #44403c;
`;

export const StyledSealDetailLikeWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledSealDetailContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  //align-items: center;
  margin: 10px 0;
  padding: 20px;
  padding-bottom: 5px;
  border: 2px solid white;
  border-radius: 20px;
  background-color: #f7cd99;
  box-shadow: 1px 2px 1px gray;
`;

export const StyledSealDetailContentWrapper = styled.div`
  display: flex;
  color: #44403c;
`;

export const StyledSealDetailDateIcon = styled(BsCalendarDateFill)`
  margin-right: 10px;
  width: 20px;
  height: 20px;
  color: #992d2d;
  font-size: 20px;
`;
export const StyledSealDetailFriendIcon = styled(FaUserFriends)`
  margin-right: 10px;
  width: 20px;
  height: 20px;
  color: #992d2d;
`;

export const StyledSealDetailContentText = styled.p`
  padding-bottom: 10px;
  border-bottom: 2px solid #992d2d;
  color: #44403c;
  //color: white;
`;

export const StyledSealDetailButton = styled.button`
  margin: 30px auto;
  padding: 5px 0;
  width: 200px;
  border: none;
  border-radius: 20px;
  color: white;
  background-color: #992d2d;
  box-shadow: 1px 2px 1px gray;
  font-size: 20px;
`;

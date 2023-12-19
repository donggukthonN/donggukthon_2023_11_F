import styled from "styled-components";
import { IoIosCopy } from "react-icons/io";
import background from "../../assets/icon/background.svg";
export const StyledInvitationContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-position: center;
  align-items: center;
  padding-top: 100px;
  height: 749px;
  width: 400px;
  background-image: url(${background});
  background-size: cover;
  font-size: 20px;
`;

export const StyledInvitationTitle = styled.div`
  padding: 5px;
  color: #2d9985;
`;

export const StyledInvitationTitleRed = styled.span`
  color: #f00;
`;

export const StyledInvitationImgContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 30px 0;
`;

export const StyledInvitationImg = styled.img`
  padding: 5px;
`;

export const StyledInvitationLinkContainer = styled.div`
  display: flex;
  margin: 20px 0;
`;

export const StyledInvitationLinkInput = styled.input`
  margin: 5px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  border: 1px solid white;
  box-shadow: 1px 2px 1px gray;
`;

export const StyledInvitationCopyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  padding: 10px;
  //width: 200px;
  border: none;
  border-radius: 10px;
  color: white;
  background-color: #2d9985;
  box-shadow: 1px 2px 1px gray;
`;

export const StyledInvitationCopyIcon = styled(IoIosCopy)`
  font-size: 17px;
  color: white;
`;

export const StyledInvitationFinishButton = styled.button`
  margin: 10px;
  padding: 10px 20px;
  width: 250px;
  border: none;
  border-radius: 20px;
  color: white;
  background-color: #992d2d;
  box-shadow: 1px 2px 1px gray;
`;

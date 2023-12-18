import {
  StyledInvitationContainer,
  StyledInvitationCopyButton,
  StyledInvitationCopyIcon,
  StyledInvitationFinishButton,
  StyledInvitationImg,
  StyledInvitationImgContainer,
  StyledInvitationLinkContainer,
  StyledInvitationLinkInput,
  StyledInvitationTitle,
  StyledInvitationTitleRed,
} from "./styled";
import SantaImg from "../../assets/images/santa-Img.svg";
import TreeImg from "../../assets/images/tree-Img.svg";
import { useRef } from "react";

const InvitationPage = () => {
  const copyLinkRef = useRef();

  return (
    <StyledInvitationContainer>
      <StyledInvitationTitle>
        함께 우표를 만들{" "}
        <StyledInvitationTitleRed>친구</StyledInvitationTitleRed>에게
      </StyledInvitationTitle>
      <StyledInvitationTitle>
        <StyledInvitationTitleRed>초대 메세지</StyledInvitationTitleRed>를
        보내세요!
      </StyledInvitationTitle>
      <StyledInvitationImgContainer>
        <StyledInvitationImg src={SantaImg} alt="산타" />
        <StyledInvitationImg src={TreeImg} alt="트리" />
      </StyledInvitationImgContainer>
      <StyledInvitationLinkContainer>
        <StyledInvitationLinkInput
          type="text"
          ref={copyLinkRef}
          value={"http://localhost:3000"}
          readOnly
        />
        <StyledInvitationCopyButton>
          <StyledInvitationCopyIcon />
        </StyledInvitationCopyButton>
      </StyledInvitationLinkContainer>
      <StyledInvitationFinishButton>
        우표 만들러 가기
      </StyledInvitationFinishButton>
    </StyledInvitationContainer>
  );
};

export default InvitationPage;

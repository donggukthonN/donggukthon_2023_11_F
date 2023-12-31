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
import { useEffect, useRef, useState } from "react";
import { getMakeCanvas } from "../../api/user";
import { useNavigate, useLocation } from "react-router-dom";

const InvitationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const copyLinkRef = useRef();
  const [canvasId, setCanvasId] = useState("");

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://app.embed.im/snow.js';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [location]);

  useEffect(() => {
    // 3-1 api
    const accessCookie = localStorage.getItem("accessCookie");
    let data = getMakeCanvas(accessCookie);
    if (data.status === "SUCCESS") {
      setCanvasId(data.result.canvasId);
    } else {
      alert(data.message);
    }
  }, []);

  const onClickCopy = () => {
    copyLinkRef.current.focus();
    copyLinkRef.current.select();

    navigator.clipboard.writeText(copyLinkRef.current.value).then(() => {
      alert("링크를 복사했습니다.");
    });
  };

  const onClickStart = () => {
    if (canvasId && canvasId !== "" && canvasId !== undefined) {
      navigate(`/stampMaking/${canvasId}`);
    }
  };

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
      {canvasId && canvasId !== "" && canvasId !== undefined && (
        <StyledInvitationLinkContainer>
          <StyledInvitationLinkInput
            type="text"
            ref={copyLinkRef}
            value={`${process.env.REACT_APP_API_URL}/stampMaking/${canvasId}`}
            readOnly
          />
          <StyledInvitationCopyButton onClick={onClickCopy}>
            <StyledInvitationCopyIcon />
          </StyledInvitationCopyButton>
        </StyledInvitationLinkContainer>
      )}
      <StyledInvitationFinishButton onClick={onClickStart}>
        우표 만들러 가기
      </StyledInvitationFinishButton>
    </StyledInvitationContainer>
  );
};

export default InvitationPage;

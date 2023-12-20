import {
  StyledLoadingContainer,
  StyledLoadingImg,
  StyledLoadingImgContainer,
  StyledLoadingTitle,
  StyledLoadingTitleRed,
  StyledLoadingSubTitle,
  StyledLoadingLoadingText,
} from "./styled";
import { Hearts } from "react-loader-spinner";
import SantaImg from "../../assets/images/santa-Img.svg";
import TreeImg from "../../assets/images/tree-Img.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import SockJS from "sockjs-client";
import { Client, Stomp } from "@stomp/stompjs";

const LoadingPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const accessCookie = localStorage.getItem("accessCookie");
    connectToServer(accessCookie);
  }, []);

  // 3-2. 소켓열기
  const stompClientRef = useRef(null);

  const [loadingData, setLoadingData] = useState(null);

  const connectToServer = (accessCookie) => {
    if (stompClientRef.current && stompClientRef.current.connected) {
      console.warn("Already connected!");
      return;
    }
    // 토큰 헤더에 어케 넘겨..?
    const fullUrl = `${import.meta.env.VITE_APP_SERVER_HOST}/ws-stamp`;
    const socket = new SockJS(fullUrl);
    stompClientRef.current = Stomp.over(socket);

    const client = new Client({
      webSocketFactory: () => socket,
    });

    client.onConnect = (frame) => {
      console.log("Connected: " + frame);
      client.subscribe(`/subscribe/stamp/${params.id}`, (messageOutput) => {
        setLoadingData(JSON.parse(messageOutput.body), {
          Authorization: `Bearer ${accessCookie}`,
        });
      });
    };

    client.onStompError = (error) => {
      console.error("WebSocket Connection Error: ", error);
      setTimeout(connectToServer, 5000); // 연결이 끊어질 경우 5초 후에 재연결 시도
    };

    client.activate();
    stompClientRef.current = client; //값 할당
    if (loadingData.status === "SUCCESS") {
      navigate(`/stampResult/${loadingData.result.stampId}`);
    } else if (loadingData.status === "FAILED") {
      console.log(loadingData.message);
    }
  };

  return (
    <StyledLoadingContainer>
      <StyledLoadingLoadingText>Loading</StyledLoadingLoadingText>
      <Hearts height={100} width={100} color="#992D2D" />
      <StyledLoadingImgContainer>
        <StyledLoadingImg src={SantaImg} alt="산타" />
        <StyledLoadingImg src={TreeImg} alt="트리" />
      </StyledLoadingImgContainer>
      <StyledLoadingTitle>
        방장님이 <StyledLoadingTitleRed>우표 이름</StyledLoadingTitleRed>을 짓고
        있어요!
      </StyledLoadingTitle>
      <StyledLoadingSubTitle>잠시만 기다려 주세요 ~</StyledLoadingSubTitle>
    </StyledLoadingContainer>
  );
};

export default LoadingPage;

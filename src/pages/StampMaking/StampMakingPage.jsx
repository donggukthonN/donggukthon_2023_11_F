import { useEffect, useRef, useState } from "react";
import StartCount from "../../components/StampMaking/StartCount";
import Timer from "../../components/StampMaking/Timer";
import {
  StyledStampMakingContainer,
  StyledStampMakingInnerContainer,
  StyledStampMakingTitle,
} from "./styled";
import ChooseColor from "../../components/StampMaking/ChooseColor";
import DrawingPanel from "../../components/StampMaking/DrawingPanel";
import { useNavigate, useParams } from "react-router-dom";
import { getMakeStamp } from "../../api/canvas";
import { useSetRecoilState } from "recoil";
import { linkState } from "../../stores/link-state";
import SockJS from "sockjs-client";
import { Client, Stomp } from "@stomp/stompjs";

const StampMakingPage = () => {
  const navigate = useNavigate();
  const params = useParams();

  const setLink = useSetRecoilState(linkState);

  const [selectedColor, setSelectedColor] = useState("#f44336");
  const [ready, setReady] = useState(false);
  const [leftTime, setLeftTime] = useState(0); // 처음엔 정지함
  const [colorData, setColorData] = useState([]); // 초기 배열
  const [timeout, setTimeout] = useState(false);
  const [changedColor, setChangedColor] = useState("");

  useEffect(() => {
    if (ready) {
      setLeftTime(100); // 테스트용
      console.log("api 호출하기 + 소켓 연결");
      const accessCookie = localStorage.getItem("accessCookie");
      let data = getMakeStamp(params.id, accessCookie);
      if (data.status === "SUCCESS") {
        setLeftTime(data.result.leftTime);
        setColorData(data.result.color);
        connectToServer(accessCookie); // 소켓 연결
      } else if (data.status === "FAILED") {
        alert(data.message);
      } else if (data.status === "NONE") {
        setLink(`${process.env.REACT_APP_API_URL}/stampMaking/${params.id}`);
        navigate(`/`);
        // 여기서 링크값 recoil에 저장하기!
      }
    }
  }, [ready, params.id]);

  const onChangeColor = (color) => {
    setSelectedColor(color.hex);
  };

  // 3-2. 소켓열기
  const stompClientRef = useRef(null);

  const connectToServer = (accessCookie) => {
    if (stompClientRef.current && stompClientRef.current.connected) {
      console.warn("Already connected!");
      return;
    }
    // 토큰 헤더에 어케 넘겨..?
    const fullUrl = `${import.meta.env.VITE_APP_SERVER_HOST}/ws-canvas`;
    const socket = new SockJS(fullUrl);
    stompClientRef.current = Stomp.over(socket);

    const client = new Client({
      webSocketFactory: () => socket,
    });

    client.onConnect = (frame) => {
      console.log("Connected: " + frame);
      client.subscribe(`/subscribe/canvas/${params.id}`, (messageOutput) => {
        setChangedColor(JSON.parse(messageOutput.body), {
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
  };

  return (
    <>
      {!ready && <StartCount setReady={setReady} />}
      <StyledStampMakingContainer>
        <StyledStampMakingInnerContainer>
          <StyledStampMakingTitle>
            우표를 예쁘게 꾸며보세요!
          </StyledStampMakingTitle>
          {ready && leftTime > 0 && (
            <Timer leftTime={leftTime} setTimeout={setTimeout} />
          )}
          <ChooseColor
            selectedColor={selectedColor}
            onChangeColor={onChangeColor}
          />
          {colorData && colorData.length > 0 && (
            <DrawingPanel
              width={13}
              height={13}
              selectedColor={selectedColor}
              colorData={colorData}
              timeout={timeout}
              changedColor={changedColor}
              stompClientRef={stompClientRef}
            />
          )}
        </StyledStampMakingInnerContainer>
      </StyledStampMakingContainer>
    </>
  );
};

export default StampMakingPage;

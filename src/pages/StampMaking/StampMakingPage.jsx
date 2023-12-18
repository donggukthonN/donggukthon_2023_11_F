import { useEffect, useState } from "react";
import StartCount from "../../components/StampMaking/StartCount";

const StampMakingPage = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (ready) {
      console.log("api 호출하기 + 소켓 연결");
    }
  }, [ready]);
  return (
    <>
      {!ready && <StartCount setReady={setReady} />}
      <>구현하기!</>
    </>
  );
};

export default StampMakingPage;

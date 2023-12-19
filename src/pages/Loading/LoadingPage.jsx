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

const LoadingPage = () => {
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

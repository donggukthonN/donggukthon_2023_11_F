// 공통으로 사용되는 스타일 작성

import styled from "styled-components";

// 배경 사진 넣기..? 어케 넣죠..
export const StyledBackgroundBlur = styled.div`
  background-image: url(../assets/images/background-blur.svg);
  background-repeat: no-repeat;
  background-size: cover;
`;

// 헤더 메뉴 스타일 정하기!
export const StyledSimpleHeaderContainer = styled.div`
  display: flex;
  margin: 10px;
  padding: 10px 0;
  font-size: 20px;
`;

import styled from "styled-components";

export const StyledStampMakingContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #fff6d4;
  overflow-y: scroll;
`;

export const StyledStampMakingInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  padding-bottom: 20px;
  width: 100%;
  height: 100%;
  max-width: 400px; // 추후 수정!
`;

export const StyledStampMakingTitle = styled.div`
  margin-top: 40px;
  text-align: center;
  font-size: 20px;
`;

export const StyledStampMakingButton = styled.button`
  margin: 10px auto;
  padding: 5px 0;
  width: 200px;
  border: none;
  border-radius: 20px;
  color: white;
  background-color: #992d2d;
  box-shadow: 1px 2px 1px gray;
  font-size: 20px;
`;

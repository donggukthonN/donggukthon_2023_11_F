import styled from "styled-components";

export const StyledStartCountContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: black;
  opacity: 0.4;
  font-size: 17px;
`;

export const StyledStartCountTitle = styled.p`
  color: white;
  font-size: 1.2rem;
`;

export const StyledStartCountLoading = styled.div`
  margin-top: 10px;
  margin-bottom: 50px;
  color: white;
  font-size: 3rem;
`;

export const StyledStartCountNumber = styled.div`
  color: white;
  font-size: 8rem;
`;

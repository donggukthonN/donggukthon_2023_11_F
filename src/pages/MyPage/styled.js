import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-position: center;
  // align-items: center;
  height: 749px;
  width: 400px;
  background-size: cover;
`; 

export const LeftBtn = styled.button`
  border-radius: 30px 0 0 30px;
  background-color: ${props => (props.$stamp ? '#992D2D' : 'white')};
  color: ${props => (props.$stamp ? 'white' : 'black')};
  font-size: 16px;
  width: 65px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
`;

export const RightBtn = styled.button`
  border-radius: 0 30px 30px 0;
  background-color: ${props => (!props.$stamp ? '#992D2D' : 'white')};
  color: ${props => (!props.$stamp ? 'white' : 'black')};
  font-size: 16px;
  width: 65px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
`;

export const OrderImg = styled.img`
  width: 22px;
  height: 20px;
  position: absolute;
`;

export const OrderDiv = styled.div`
  margin-left: 68px;
  display: flex;
  flex-direction: column;
  justify-contents: flex-end;
`;

export const OrderText = styled.div`
  font-size: 16px;
  margin-top: 15px;
  margin-left: 4px;
`;

export const MainContainer = styled.div`

  padding-top: 31px;
  height: 100%;
`;
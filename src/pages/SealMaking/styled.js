import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 792px;
  background-color: #FFF6D4;
`;

export const SealContainer = styled.div`
  margin-top: 29px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const ButtonLayer = styled.div`
  margin-top: 55px;
  display: flex;
  flex-direction: row;
  width: 308px;
  justify-content: space-between; 
`;

export const Button = styled.button`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  font-size: 24px;  
  width: 149px;
  height: 48px;
  border: none;
  box-shadow: -5px -5px 10px 0px #FFF, 5px 5px 10px 0px #BEBEBE;
`;
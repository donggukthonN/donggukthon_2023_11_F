import styled from "styled-components";

export const StyledStampResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 17px;
`;

export const StyledStampResultStampWrapper = styled.div`
  padding: 20px 10px;
`;

export const StyledStampResultStampFrame = styled.img`
  width: 200px;
  height: 200px;
`;

export const StyledStampResultTitle = styled.div`
  padding: 5px;
  color: black;
`;

export const StyledStampResultTitleRed = styled.span`
  color: #f00;
`;

export const StyledStampResultButton = styled.button`
  margin: 30px 10px;
  padding: 10px 20px;
  width: 200px;
  border: none;
  border-radius: 20px;
  color: white;
  background-color: #2d9985;
  box-shadow: 1px 2px 1px gray;
`;

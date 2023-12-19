import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 693px;
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

export const TabBar = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 19px;
`;

export const SButton1 = styled.button`
  width: 103px;
  height: 30px;
  border: none;
  background-color: ${props => (props.$isStatus === 'default' ? '#2D9985' : 'white')};
  color: ${props => (props.$isStatus === 'default' ? 'white' : '#44403C')};
  `;
export const SButton2 = styled.button`
  width: 103px;
  height: 30px;
  border: none;
  background-color: ${props => (props.$isStatus === 'like' ? '#2D9985' : 'white')};
  color: ${props => (props.$isStatus === 'default' ? 'like' : '#44403C')};

  `;
export const SButton3 = styled.button`
  width: 103px;
  height: 30px;
  border: none;
  background-color: ${props => (props.$isStatus === 'mine' ? '#2D9985' : 'white')};
  color: ${props => (props.$isStatus === 'mine' ? 'white' : '#44403C')};
`;

export const ListContainer = styled.div`
  padding-top: 10px;
  width: 100%;
  height: 100%;
`;

export const Submit = styled.button`
  position: absolute;
  margin-top: 606px;
  background-color: #2D9985;
  width: 185px;
  height: 41px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 100px;
  border: none;
  box-shadow: -5px -5px 10px 0px #FFF, 5px 5px 10px 0px #BEBEBE;
`;
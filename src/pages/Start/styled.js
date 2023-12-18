import styled from "styled-components";
import background from '../../assets/icon/background.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-position: center;
  align-items: center;
  height: 749px;
  width: 400px;
  background-image: url(${background});
  background-size: cover;
  `; 

export const ProjectName = styled.div`
  font-family: 'Otomanopee One';
  font-size: 50px;
  color: white;
 `;

export const Introduce = styled.div`
  font-family: 'YClover-regular';
  font-size: 25px;
  font-weight: 500;
  color: white;
`;

export const Title = styled.div`
  font-family: 'YClover-bold';
  margin-top: 5px;
  font-size: 45px;
  font-weight: 500;
  color: white;
`;

export const SignIn = styled.div`
  width: 257px;
  height: 48px;
  border-radius: 100px;
  font-family: 'YClover-regular';
  background-color: #FFE81D;
  display: flex;
  justify-content: center; 
  align-items: center;
  margin-top: 50px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  `;

export const SnowyFloor = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  border: 1px solid black;
`;

// Nickname page

export const ImageContainer = styled.div`
  display: flex-end;
  flex-direction: row;
  margin-top: 105px;
`;


export const Info = styled.div`
  font-size: 25px;
  margin-top: 30px;
`;

export const CheckBox = styled.div`
  margin-top: 30px;
  flex-direction: row;
`;

export const InputBox = styled.input`
  height: 50px;
  width: 220px;
  padding: 10px;
`;

export const CheckButton = styled.button`
  border-radius: 100px;
  margin-left: 13px;
  width: 107px;
  height: 43px;
  background-color: #2D9985;
  box-shadow: -5px -5px 10px 0px #FFF, 5px 5px 10px 0px #BEBEBE;
  color: white;
`;

export const SubmitBtn = styled.button`
  background-color: #992D2D;
  margin-top: 50px;
  border-radius: 100px;
  width: 200px;
  height: 45px;
  font-size: 17px;
  color: white;
  display: flex;
  justify-content: center; 
  align-items: center;
  `;
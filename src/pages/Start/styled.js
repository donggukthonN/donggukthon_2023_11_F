import styled from "styled-components";
import snowy from '../../assets/icon/snowy_floor.svg';
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
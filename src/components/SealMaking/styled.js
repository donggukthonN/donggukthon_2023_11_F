import styled from "styled-components";
import sealFrame from '../../assets/icon/seal_4_u.svg';

export const SealDiv = styled.div`
  width: 321px;
  height: 217px;
  background-image: url(${sealFrame});
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  padding-top: 50px;
`;

export const AllSeal = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 16px;
`;

export const SealBox = styled.button`
  display: flex;
  align-items: center; 
  justify-content: center;
  width: 71px;
  height: 72px;
  background-color: transparent;
  border: none;
`;
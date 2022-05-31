import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 8%;
  background: red;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;

export const Card = styled.div`
  cursor: pointer;
  background: rgba(255, 255, 255, 80%);
  padding: 5px 0;
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 8%;
  box-shadow: 5px 10px 8px #888888;
  text-align: center;
  transition: 300ms ease-in-out;
  :hover {
    transition: 300ms ease-in-out;
    transform: scale(1.04);
  }
`;

export const CardImg = styled.div`
  max-width: 85%;
  height: 70%;
  overflow: hidden;
  border-radius: 8%;
  box-shadow: 5px 10px 8px #888888;
  margin-bottom: 20px; 
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const Text = styled.div`
  width: 100%;
  padding: 10px 0;
  background: rgba(62, 5, 5, 100%);
  color: white;
`;

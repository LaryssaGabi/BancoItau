import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80px;
  background-color: #ec7000;
`;

export const Container = styled.div`
  width: 100%;
`;

export const ContainerItens = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: 1246px;
  padding: 0 15px;
  margin: 0 auto;
`;

export const Img = styled.img`
  display: flex;
  align-items: center;
  margin: 0 20px;
  cursor: pointer;
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin: 0 20px 0 0;
`;

export const Li = styled.li`
  list-style: none;
`;

export const ButtonItemMenu = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;

  font-weight: bold;
  color: white;
  gap: 10px;
  cursor: pointer;

  img {
    transition: transform 0.3s ease; 
  }
  
  &:hover img {
    transform: rotate(-90deg);
  }
`;

export const DivButtonAccess = styled.div`
  display: flex;
  align-items: center;
  height: 70%;
  padding: 0 20px;
  background-color: #106eb0;
  cursor: pointer;
  border-radius: 3px;
  transition: background-color 0.3s ease; 
  

  &:hover{
    background-color: #0a5f8d;
  }
`;

export const ButtonAccess = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;

  gap: 5px;
  color: white;
  font-weight: bold;
  height: 100%;
  cursor: pointer;
`;
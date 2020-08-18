import styled from "styled-components";

export const Container = styled.header`
  width: auto;
  height: 85px;
  background: red;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Nav = styled.nav`
  width: 95%;
  height: 65px;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: -1px 0px 60px 0px rgba(44, 11, 230, 0.75);
  margin: 0% 5%;
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  max-width: 900px;
  height: 40px;
  border-radius: 3px;
  margin: 0% 10%;
  font-size: 20px;
  padding: 0% 2%;

  &:hover {
    border: solid 3px red;
  }
`;

export const Button = styled.button`
  display: none;
  width: 77px;
  height: 56px;
  font-size: 20px;
  border: none;
  margin: 0% 5%;
  border-radius: 44px;

  &:hover {
    background: black;
    color: white;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    display: block;
  }
`;

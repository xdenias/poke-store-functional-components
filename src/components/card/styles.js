import styled from "styled-components";

export const Box = styled.div`
  width: 237px;
  height: 250px;
  margin: 10px;
  border: black solid 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 14px;

  img {
    width: 130px;
    height: 130px;
    border: black solid 2px;
    border-radius: 64px;
    &:hover {
      background: rgba(255, 0, 0, 0.829);
    }
  }

  button {
    width: 190px;
    height: 60px;
    border: black solid 2px;
    border-radius: 10px;
    font-size: 18px;
    &:hover {
      background: black;
      color: white;
      cursor: pointer;
    }
  }
`;

import styled from "styled-components";

export const Aside = styled.aside`
  width: 28%;
  height: calc(100vh - 85px);
  border-left: solid 1px black;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    border-bottom: solid black 1px;
    width: 90%;

    padding: 7px;
  }
  div {
    width: 90%;
    height: calc(100vh - 264px);
    border-bottom: solid black 1px;

    table {
      width: 99%;
      tr {
        display: flex;
        flex-flow: wrap;
        justify-content: space-around;
        border-bottom: solid 1px black;
        td {
          width: 69px;
        }
      }
    }
  }
`;

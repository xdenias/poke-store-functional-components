import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.main`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;

  @media (max-width: 600px) {
    font-size: 1.5rem;
    /* background: red; */
  }
`;

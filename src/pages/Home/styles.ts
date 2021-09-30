import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  align-items: center;

  img {
    width: 300px;
  }

  flex-direction: column-reverse;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

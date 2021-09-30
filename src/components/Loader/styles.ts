import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg)
  }
  
  to {
    transform: rotate(360deg)
  }
`;

export const Container = styled.div`
  width: 24px;
  height: 24px;

  vertical-align: middle;
  display: inline-block;

  border: 3px solid #ffffff6f;
  border-radius: 100px;
  border-left-color: #fff;
  animation: ${spin} 0.8s linear infinite;
`;

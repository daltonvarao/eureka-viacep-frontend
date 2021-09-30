import styled, { keyframes } from "styled-components";
import colors from "../../styles/colors";
import { Input } from "../Search/styles";

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  position: fixed;
  z-index: 100;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(3px);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: none;

  &.show {
    display: flex;
  }
`;

export const ModalContent = styled.div`
  background: #fff;

  max-width: 350px;
  padding: 1rem;
  border-radius: 0.5rem;

  &.show {
    animation: ${slideDown} 0.2s ease-in;
  }

  @media screen and (min-width: 768px) {
    min-width: 480px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  h2 {
    font-size: 18px;
  }

  button {
    background: transparent;
    vertical-align: middle;
    border: 0;
    font-size: 24px;
    cursor: pointer;
    color: #0009;
    transition: color 0.4s;
  }

  @media screen and (min-width: 768px) {
    h2 {
      font-size: 22px;
    }
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 13px;
    color: ${colors.gray30};
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 0.25rem;
  }
`;

export const ReadOnlyInput = styled(Input).attrs(() => ({
  readOnly: true,
}))`
  margin-bottom: 0.5rem;
  padding: 0.5rem;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
`;

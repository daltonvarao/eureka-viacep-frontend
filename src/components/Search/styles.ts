import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div`
  form {
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    gap: 1rem;
  }
`;

export const Title = styled.h1`
  color: ${colors.darkGray};
  text-align: center;
`;

export const ErrorMessage = styled.div`
  color: ${colors.error};
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 500;

  svg {
    margin-right: 0.5rem;
  }
`;

export const Input = styled.input`
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid ${colors.gray10};

  outline: none;

  transition: all 0.3s;

  :focus {
    border: 1px solid ${colors.primary};
    box-shadow: 0 0 3px 3px ${colors.primaryLight};
  }

  ::placeholder {
    color: #ccc;
  }

  :-ms-input-placeholder {
    color: #ccc;
  }

  ::-ms-input-placeholder {
    color: #ccc;
  }
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background: ${colors.primary};
  border: 1px solid ${colors.primary};
  color: ${colors.white};
  font-weight: bold;
  font-size: 16px;
  transition: all 0.3s;
  cursor: pointer;

  :hover {
    box-shadow: 0 0 3px 4px ${colors.primaryLight};
  }

  :disabled {
    box-shadow: none;
    cursor: not-allowed;
    opacity: 0.8;
  }
`;

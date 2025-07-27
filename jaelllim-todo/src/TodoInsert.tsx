import React from 'react';
import { MdAdd } from "react-icons/md";
import styled, { keyframes } from "styled-components";

type TodoInsertProps = {
  newtodoRef: React.RefObject<HTMLInputElement | null>;
  onSubmit: (ref: React.RefObject<HTMLInputElement | null>) => void;
};

export default function TodoInsert({ newtodoRef, onSubmit }: TodoInsertProps) {
  return (
    <StyledDiv>
      <StyledInput ref={newtodoRef} placeholder="할 일 입력" />
      <StyledButton type="submit" onClick={() => onSubmit(newtodoRef)}>
        <MdAdd />
      </StyledButton>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  background: #495057;
`;

const fadein = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: none;
  }
`;

const StyledInput = styled.input`
  background: none;
  animation: ${fadein} 1.5s linear;
  outline: none;
  border: none;
  width: 100%;
  display: flex;
  font-size: 1rem;
  &::placeholder {
    color: #dee2e6;
  }
`;

const StyledButton = styled.button`
  background: #868e96;
  color: white;
  font-size: 1.5rem;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background: lightcyan;
  }
`;

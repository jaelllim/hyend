import { useState } from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from 'react-icons/md';
import styled, { css, keyframes } from 'styled-components';
import Todo from '../constants';

type Props = {
  todo: Todo;
  onRemove: () => void;
};

const TodoListItem = ({ todo, onRemove }: Props) => {
  const [selected, setSelected] = useState<boolean>(todo.selected);

  const toggleSelect = () => setSelected(!selected);

  return (
    <StyledArticle id={todo.id}>
      <StyledSection state={selected} onClick={toggleSelect}>
        {selected ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <StyledText>{todo.text}</StyledText>
      </StyledSection>
      <StyledSelectedSection onClick={onRemove}>
        <MdRemoveCircleOutline />
      </StyledSelectedSection>
    </StyledArticle>
  );
};

const fadein = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: none;
  }
`;

const StyledArticle = styled.article`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:nth-child(even) {
    background-color: whitesmoke;
  }
  gap: 10px;
`;

const StyledText = styled.div`
  font-weight: 700;
  cursor: pointer;
`;

const StyledSection = styled.section<{ state: boolean }>`
  display: flex;
  width: 100%;
  align-items: center;
  animation: ${fadein} 2s linear;
  svg {
    font-size: 1.5rem;
    cursor: pointer;
  }
  border-bottom: 1px solid whitesmoke;

  ${({ state }) => state && selectedStyle}
`;

const selectedStyle = css`
  svg {
    color: lightcoral;
  }
  color: lightslategrey;
  text-decoration: line-through;
  text-decoration-color: grey;
`;

const StyledSelectedSection = styled.section`
  display: flex;
  align-items: center;
  color: lightcoral;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

export default TodoListItem;

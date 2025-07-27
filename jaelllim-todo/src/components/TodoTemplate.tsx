import React from 'react';
import styled from 'styled-components';

interface TodoTemplateProps {
  children: React.ReactNode;  // 이게 더 일반적이고 에러 없음
}

const TodoTemplate = ({ children }: TodoTemplateProps) => {
  return (
    <StyledTodoTemplate>
      <StyledTodoTitle>일정 관리</StyledTodoTitle>
      <StyledTodoContent>{children}</StyledTodoContent>
    </StyledTodoTemplate>
  );
};

const StyledTodoTemplate = styled.article`
  @media (max-width: 1920px) {
    width: 512px;
    margin: 6rem auto;
    border-radius: 4px;
  }

  @media (max-width: 767px) {
    width: 300px;
    margin: 3rem auto;
    border-radius: 2px;
  }
`;

const StyledTodoTitle = styled.section`
  background: #22b8cf;
  color: white;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  font-weight: 700;
`;

const StyledTodoContent = styled.section`
  background-color: white;
`;

export default TodoTemplate;

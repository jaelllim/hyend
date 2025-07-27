import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
const TodoTemplate = ({ children }) => {
    return (_jsxs(StyledTodoTemplate, { children: [_jsx(StyledTodoTitle, { children: "\uC77C\uC815 \uAD00\uB9AC" }), _jsx(StyledTodoContent, { children: children })] }));
};
const StyledTodoTemplate = styled.article `
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
const StyledTodoTitle = styled.section `
  background: #22b8cf;
  color: white;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  font-weight: 700;
`;
const StyledTodoContent = styled.section `
  background-color: white;
`;
export default TodoTemplate;

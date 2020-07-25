import styled from "styled-components";

export const Button = styled.button`
  border: 0;
  background-color: var(--theme-orange-light);
  color: white;
  font-weight: bold;
  width: 100%;
  margin-top: var(--theme-gutter-top);
  padding: 8px;
  height: 45px;
  cursor: pointer;

  &:hover {
    background-color: var(--theme-orange);
  }
`;

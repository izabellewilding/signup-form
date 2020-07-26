import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  color: var(--theme-grey);
  background-color: var(--theme-grey-light);
  border: 0;
  margin-top: var(--theme-gutter-top);
  padding: 15px 10px 15px 10px;
  box-sizing: border-box;

  &:focus {
    outline: 1px auto var(--theme-blue);
  }

  &:invalid {
    outline: 1px auto var(--theme-red);
  }
`;

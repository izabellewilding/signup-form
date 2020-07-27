import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  color: var(--theme-grey);
  background-color: var(--theme-grey-light);
  border: 0;
  margin-top: var(--theme-gutter-top);
  padding: 15px 10px 15px 42px;
  box-sizing: border-box;
  border-radius: var(--theme-border-rounded);

  &:focus {
    outline: 1px auto var(--theme-blue);
  }
`;

export const PasswordInput = styled(Input)`
  &:focus:invalid {
    outline: 1px auto var(--theme-error);
  }
`;

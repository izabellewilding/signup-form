import styled from "styled-components";

export const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled(CenteredContainer)`
  min-width: 100vh;
  min-height: 100vh;
  background-color: var(--theme-grey);
  margin: auto;
`;

export const FormContainer = styled(CenteredContainer)`
  display: flex;
  flex-direction: column;
  max-width: 424px;
  padding: 32px 40px 40px;
  text-align: left;
  width: 100%;
  height: auto;
  background-color: white;
  box-shadow: 1px 0px 15px -4px #000000;
`;

export const Form = styled.form`
  width: 100%;
  margin-top: var(--theme-gutter-top);
`;

import styled from "styled-components";

export const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled(CenteredContainer)`
  width: 100%;
  min-height: 100vh;
  background-color: var(--theme-grey);
  margin: auto;
`;

export const FormContainer = styled(CenteredContainer)`
  display: flex;
  flex-direction: column;
  max-width: 84%;
  padding: 20px 24px 20px 24px;
  text-align: left;
  width: 100%;
  height: auto;
  background-color: white;
  box-shadow: 1px 0px 15px -4px #000000;
  border-radius: var(--theme-border-rounded);

  @media (min-width: 600px) {
    max-width: 424px;
    padding: 32px 40px 40px;
  }
`;

export const Form = styled.form`
  width: 100%;
  margin-top: var(--theme-gutter-top);
`;

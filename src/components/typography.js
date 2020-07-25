import styled from "styled-components";

export const Heading1 = styled.h1`
  font-family: "Raleway", Sans-serif;
  font-size: 36px;
  letter-spacing: 0.5px;
  color: white;
  margin-bottom: 52px;
`;

export const Body = styled.p`
  font-family: "Raleway", Sans-serif;
  font-size: 16px;
  letter-spacing: 0.5px;
  color: ${(props) => (props.button ? "white" : "var(--theme-grey)")};
`;

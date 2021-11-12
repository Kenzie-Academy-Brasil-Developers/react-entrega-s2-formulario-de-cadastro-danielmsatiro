import styled from "styled-components";

export const Button = styled.button`
  font-size: 1.3rem;
  font-weight: bold;
  background-color: transparent;
  margin-top: 15px;
  transition: all 0.5s;
  border-radius: 10px;
  padding: 15px;
  min-width: 200px;
  &:hover {
    background-color: slategray;
  }
`;

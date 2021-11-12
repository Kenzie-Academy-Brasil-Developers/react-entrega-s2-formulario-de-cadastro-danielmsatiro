import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 500px;

  input {
    font-size: 1.3rem;
    margin-top: 15px;
    background-color: rgb(169, 169, 169, 0.3);
    border-radius: 10px;
    padding: 10px;
    &::placeholder{
      color: darkslategray;
    }
  }
  p {
    text-align: center;
    margin-top: 5px;
    height: 25px;
  }
`;

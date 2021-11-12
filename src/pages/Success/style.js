import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1,h2,img {
      margin-top: 20px;
      width: 80%;
      color: darkslategray;
      text-shadow: 3px 3px 5px slategray;
  }

  @media(min-width: 600px){
      h1{
        font-size: 2rem;
      }
      h2{
        font-size: 1.5rem;
      }
  }

  img {
    border: 5px groove #23abc1;
    border-radius: 15px;
    padding: 15px;
    box-sizing: border-box;
  }

`;

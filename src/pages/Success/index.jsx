import { useHistory } from "react-router";
import { Card } from "./style";
import { Container } from "../../components/Container/style";
import { Button } from "../../components/Button/style";


export const Success = ( {name} ) => {
  const history = useHistory();
  return (
    <Container>
      <Card>
        <h1>Bem vindo, {name}!</h1>
        <h2> Que tal uma pausa para o humor?</h2>
        <img src="https://memes.casa/imagens/voce-vai-ficar-ok.jpg" alt="" />
        <Button onClick={() => history.push("/")}>voltar</Button>
      </Card>
    </Container>
  );
};

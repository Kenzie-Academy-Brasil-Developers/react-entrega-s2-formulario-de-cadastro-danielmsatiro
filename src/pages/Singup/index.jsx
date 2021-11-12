import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Container } from "../../components/Container/style";
import { Form } from "./style"
import { useHistory } from "react-router";
import { Button } from "../../components/Button/style"

export const Singup = ( {setName} ) => {
  const formSchema = yup.object().shape({
    name: yup.string().required("Digite um nome"),
    email: yup
      .string()
      .required("Digite um email")
      .email("Digite um email válido"),
    password: yup
      .string()
      .required("Crie uma senha")
      /* .min(8, "Senha deve possuir ao menos 8 caracteres alfanuméricos") */
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Digite ao menos 8 caracteres, com pelo menos 1 número, 1 letra e 1 caractere especial"
      ),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password"), null], "Senha diferente da anterior"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const history = useHistory();

  const onSubmitFunction = (data) => {
    console.log(data);
    setName(data.name)
    history.push("/success");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmitFunction)}>
        <input type="text" placeholder="Nome" {...register("name")} />
        <p>{errors.name?.message}</p>
        <input type="text" placeholder="Email" {...register("email")} />
        <p>{errors.email?.message}</p>
        <input type="password" placeholder="Senha" {...register("password")} />
        <p>{errors.password?.message}</p>
        <input
          type="password"
          placeholder="Confirmar Senha"
          {...register("confirm_password")}
        />
        <p>{errors.confirm_password?.message}</p>
        <Button type="submit">Cadastrar</Button>
      </Form>
    </Container>
  );
};

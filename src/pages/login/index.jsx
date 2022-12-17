import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { MdEmail, MdLock } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api";
import {
  Container,
  Title,
  TitleLogin,
  SubTitleLogin,
  Column,
  CreateAccount,
  ForgotPassword,
  Row,
  Wrapper,
} from "./styles";

const schema = yup.object({
  email: yup.string().required("Campo obrigatório"),
  password: yup
    .string()
    .min(8, "Mínimo 8 caracteres")
    .required("campo obrigatório"),
});

export const Login = () => {
  const navigate = useNavigate();
  const handleNavigateHome = () => {
    navigate("/");
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.get(
        `users?email=${formData.email}&password=${formData.password}`
      );
      if (data.length === 1) {
        navigate("/feed");
      } else {
        alert("Email ou senha inválido");
      }
    } catch {
      alert("Houve um erro, tente novamente.");
    }
  };

  return (
    <>
      <Header nav={handleNavigateHome} />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="email"
                control={control}
                placeholder="E-mail"
                leftIcon={<MdEmail />}
                errorMessage={errors?.email?.message}
              />
              <Input
                name="password"
                control={control}
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock />}
                errorMessage={errors?.password?.message}
              />
              <Button type="submit" title="Entrar" variant="secondary"></Button>
            </form>
            <Row>
              <ForgotPassword>Esqueci minha senha</ForgotPassword>
              <CreateAccount>Criar conta</CreateAccount>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

import { Header } from "../../components/Header";
import { Column, Container, Title, SubTitle } from "./styles";
import { Input2 } from "../../components/Input";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { Button} from "../../components/Button";


export const SignIn = () => {
  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Title>Comece agora grátis</Title>
          <SubTitle>Crie sua conta e make the change._</SubTitle>
          <form >
              <Input2
                name="name"
                placeholder="Nome completo"
                leftIcon={<MdPerson />}
              />
              <Input2
                name="email"
                placeholder="E-mail"
                leftIcon={<MdEmail />}
              />
              <Input2
                name="password"
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock />}
              />
              <Button type="submit" title="Cadastrar" variant="secondary"></Button>
            </form>
            <SubTitle>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</SubTitle>
        </Column>
      </Container>
    </>
  );
};

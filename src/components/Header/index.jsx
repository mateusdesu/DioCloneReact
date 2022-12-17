import {
  Container,
  Row,
  Column,
  Wrapper,
  SearchInputContainer,
  Menu,
  MenuRight,
  UserPicture,
  Input,
} from "./styles";

import { Button } from "../Button";

import dioLogo from "../../assets/dio-logo.svg";

export const Header = ({ autenticado,nav }) => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={dioLogo} alt="DIO logo" onClick={nav} />
          {autenticado ? (
            <>
              <SearchInputContainer>
                <Input placeholder="Buscar..." />
              </SearchInputContainer>
              <Menu>Live code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <>
            <UserPicture src="https://avatars.githubusercontent.com/u/62315096?v=4"/>
            </>
          ) : (
            <>
              <MenuRight href="#">Home</MenuRight>
              <Button title="Entrar" />
              <Button title="Cadastrar" />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

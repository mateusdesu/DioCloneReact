import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import bannerImage from "../../assets/Banner.png";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import { useNavigate } from "react-router-dom";

import { Container, Column, Title, TitleHighlight } from "./styles";
export const Feed = () => {
  const navigate = useNavigate();
  const handleNavigateHome= () => {
    navigate('/');
  }
  return (
    <>
      <Header autenticado={true} nav={handleNavigateHome}/>
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight># RANKING TOP 5 DA SEMANA</TitleHighlight>
          <UserInfo
            percentual={90}
            name="Mateus Lopes"
            image="https://avatars.githubusercontent.com/u/62315096?v=4"
          />
          <UserInfo
            percentual={66}
            name="Mateus Lopes"
            image="https://avatars.githubusercontent.com/u/62315096?v=4"
          />
          <UserInfo
            percentual={50}
            name="Mateus Lopes"
            image="https://avatars.githubusercontent.com/u/62315096?v=4"
          />
          <UserInfo
            percentual={34}
            name="Mateus Lopes"
            image="https://avatars.githubusercontent.com/u/62315096?v=4"
          />
          <UserInfo
            percentual={17}
            name="Mateus Lopes"
            image="https://avatars.githubusercontent.com/u/62315096?v=4"
          />
        </Column>
      </Container>
    </>
  );
};

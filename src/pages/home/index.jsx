import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import bannerImage from "../../assets/Banner.png";
import { useNavigate } from "react-router-dom";

import { Container, Title, TitleHighlight, TextContent } from "./styles";
export const Home = () => {
  const navigate = useNavigate();
  const handleNavigateSignIn = () => {
    navigate("/login");
  };
  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighlight>
              Implemente <br />
            </TitleHighlight>
            o seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </TextContent>
          <Button
            title="Começar agora"
            variant="secondary"
            onClick={handleNavigateSignIn}
          />
        </div>
        <div>
          <img src={bannerImage} alt="Banner dio" width="100%" height="100%" />
        </div>
      </Container>
    </>
  );
};

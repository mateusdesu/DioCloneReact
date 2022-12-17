import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture,
} from "./styles";

import { FiThumbsUp } from "react-icons/fi";

export const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="https://hermes.digitalinnovation.one/articles/cover/3974eefa-dc95-46c9-8a19-60d1443ee843.png"/>
      <Content>
        <UserInfo>
            <UserPicture src="https://avatars.githubusercontent.com/u/62315096?v=4"/>
            <div>
                <h4>Mateus lopes</h4>
                <p>Há 17 minutos</p>
            </div>
        </UserInfo>
        <PostInfo>
            <h4>Projeto para curso de HTML e CSS</h4>
            <p>Projeto feito no curso de HTML e CSS na formação DIO CSS Developer... <strong>Saiba Mais</strong></p>
        </PostInfo>
        <HasInfo>
            <h4>#HTML #CSS #JavaScript</h4>
            <p><FiThumbsUp/> 10</p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
};

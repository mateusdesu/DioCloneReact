import { Container, NameText, Progress, UserPicture } from "./styles";

export const UserInfo = ({ name, image, percentual }) => {
  return (
    <Container>
      <UserPicture src={image} />
      <NameText>{name}</NameText>
      <Progress percentual={percentual} />
    </Container>
  );
};

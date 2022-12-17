import { InputContainer, IconContainer, InputText, ErrorText } from "./styles";
import { Controller } from "react-hook-form";

export const Input = ({ leftIcon, name, control, errorMessage, ...rest }) => {
  return (
    <>
      <InputContainer>
        {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
        <Controller
          name={name}
          control={control}
          render={({ field }) => <InputText {...field} {...rest} />}
        />
      </InputContainer>
      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  );
};

export const Input2 = ({ leftIcon, name, ...rest }) => {
  return (
    <>
      <InputContainer name={name}>
        {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
        <InputText {...rest} />
      </InputContainer>
    </>
  );
};

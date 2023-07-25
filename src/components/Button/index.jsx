/* eslint-disable react/jsx-props-no-spreading */
import { ContainerButton } from './styled';

function Button({ children, ...props }) {
  return (
    <ContainerButton {...props}>
      {children}
    </ContainerButton>
  );
}

export default Button;

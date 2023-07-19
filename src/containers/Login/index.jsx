/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/named */

import { useForm } from 'react-hook-form';

import ImgLogin from '../../assets/burguer1.svg';
import Logo from '../../assets/logo.svg';
import {
  Container, Containeriten, Input, Label, Button, LoginImage, LogoImg, SingInLink,
} from './style';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (

    <Container>

      <LoginImage src={ImgLogin} alt="Login-image" />

      <Containeriten>
        <LogoImg src={Logo} alt="image-logo" />

        <h1>Login</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input type="email" {...register('email')} />
          <Label>Senha</Label>
          <Input type="password" {...register('password')} />

          <Button type="submit">Sing in</Button>

        </form>

        <SingInLink>
          Não possui uma conta ?
          <a> Sing Up</a>
        </SingInLink>

      </Containeriten>

    </Container>
  );
}

export default Login;

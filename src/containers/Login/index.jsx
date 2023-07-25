/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/named */

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import ImgLogin from '../../assets/burguer1.svg';
import Logo from '../../assets/logo.svg';
import Button from '../../components/Button/index';
import api from '../../services/api';
import {
  Container, InputErro, Containeriten, Input, Label, LoginImage, LogoImg, SingInLink,
} from './style';

function Login() {
  const schema = Yup.object().shape({
    email: Yup.string().email('Digite um email válido!').required('Email obrigatório!'),
    password: Yup.string().required('A senha é obrigatória').min(6, 'Sua senha deve ter no mínimo 6 dígitos! '),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (clientData) => {
    const response = await toast.promise(
      api.post('sessions', {
        email: clientData.email,
        password: clientData.password,
      }),
      {
        pending: 'Verificando seus dados!',
        success: 'Bem-vindo(a)!',
        error: 'Verifique seus dados!',
      },

    );

    console.log(response);
  };

  return (

    <Container>

      <LoginImage src={ImgLogin} alt="Login-image" />

      <Containeriten>
        <LogoImg src={Logo} alt="image-logo" />

        <h1>Login</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input type="email" {...register('email')} erro={errors.email?.message} />
          <InputErro>{errors.email?.message}</InputErro>
          <Label>Senha</Label>
          <Input type="password" {...register('password')} erro={errors.password?.message} />
          <InputErro>{errors.password?.message}</InputErro>

          <Button type="submit" style={{ marginTop: 25 }}>Sing In</Button>

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

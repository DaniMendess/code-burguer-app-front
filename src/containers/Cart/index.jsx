/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import CartLogo from '../../assets/carrinho-image.svg';
import { CartItems } from '../../components/index';
import { Container, CartImg } from './style';

export function Cart() {
  return (
    <Container>
      <CartImg src={CartLogo} alt="logo-do-carrinho" />
      <CartItems />
    </Container>
  );
}

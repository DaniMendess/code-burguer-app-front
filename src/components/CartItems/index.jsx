/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Carrinho from '../../assets/carrinho-vazio64.png';
import { useCart } from '../../hooks/CartContext';
import formatCurrency from '../../utils/formatCurrency';
import {
  Container, Header, Body, EmptyCart,
} from './style';

export function CartItems() {
  const { cartProducts } = useCart();

  return (
    <Container>
      <Header>
        <p />
        <p>Itens</p>
        <p>Preço</p>
        <p style={{ paddingRight: '30px' }}>Quantidade</p>

        <p>Total</p>
      </Header>
      {cartProducts && cartProducts.length > 0 ? cartProducts.map((product) => (
        <Body key={product.id}>
          <img src={product.url} alt="imagem-do-produto" />
          <p>{product.name}</p>
          <p>{formatCurrency(product.price)}</p>
          <div className="quantity-container">
            <button>-</button>
            <p>{product.quantity}</p>
            <button>+</button>
          </div>

          <p>{formatCurrency(product.quantity * product.price)}</p>
        </Body>
      ))
        : (
          <EmptyCart>
            <p>Carrinho vazio</p>
            <img src={Carrinho} alt="carrinho-vazio" />
          </EmptyCart>
        )}

    </Container>
  );
}

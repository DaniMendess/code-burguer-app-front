/* eslint-disable import/no-cycle */
import React from 'react';

import { useCart } from '../../hooks/CartContext';
import { Button } from '../index';
import {
  Container, Image, ProductName, ProductsPrice,
} from './style';

export function CardProducts({ product }) {
  const { putProdutsInCart } = useCart();
  return (
    <Container>
      <Image src={product.url} />
      <div>
        <ProductName>{product.name}</ProductName>
        <ProductsPrice>{product.formatedPrice}</ProductsPrice>
        <Button onClick={() => putProdutsInCart(product)}>Adicionar</Button>
      </div>

    </Container>

  );
}

/* eslint-disable import/no-cycle */
import React from 'react';

import { Button } from '../index';
import {
  Container, Image, ProductName, ProductsPrice,
} from './style';

export function CardProducts({ product }) {
  return (
    <Container>
      <Image src={product.url} />
      <div>
        <ProductName>{product.name}</ProductName>
        <ProductsPrice>{product.formatedPrice}</ProductsPrice>
        <Button>Adicionar</Button>
      </div>

    </Container>

  );
}

import React from 'react';

import Button from '../Button/index';
import {
  Container, Image, ProductName, ProductsPrice,
} from './style';

function CardProducts({ product }) {
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

export default CardProducts;

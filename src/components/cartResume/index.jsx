import React, { useState, useEffect } from 'react';

import { useCart } from '../../hooks/CartContext';
import formatCurrency from '../../utils/formatCurrency';
import { Button } from '../Button';
import { Container } from './style';

export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0);
  const [deliveryTax] = useState(5);

  const { cartProducts } = useCart();
  console.log(cartProducts);

  useEffect(() => {
    const sumAllItems = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc;
    }, 0);

    setFinalPrice(sumAllItems + deliveryTax);
  }, [cartProducts, deliveryTax]);

  return (
    <div>
      <Container>
        <div className="container-top">
          <h3 className="title">Resumo do pedido</h3>
          <p className="items">Itens</p>
          <p className="items-price">{formatCurrency(finalPrice)}</p>
          <p className="price-tax">Taxa de entrega</p>
          <p className="delivery-tax-price">{formatCurrency(deliveryTax)}</p>
        </div>

        <div className="container-bottom">
          <p>Total</p>
          <p>R$30,00</p>
        </div>

      </Container>
      <Button style={{ width: '100%', marginTop: 30 }}>Finalizar pedido</Button>
    </div>

  );
}

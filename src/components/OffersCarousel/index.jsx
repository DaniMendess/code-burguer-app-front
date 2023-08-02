import React, { useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';

import Offers from '../../assets/OFERTAS.png';
import api from '../../services/api';
import {
  Container, CategoryImg, ContainerItems, Button, Image,
} from './style';

function OfferCarousel() {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    async function loadOffers() {
      const { data } = await api.get('products');

      const onlyOffers = data.filter((product) => product.offer);

      setOffers(onlyOffers);
    }

    loadOffers();
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 },
  ];

  return (

    <Container>
      <CategoryImg src={Offers} alt="logo-da-oferta" />
      <Carousel itemsToShow={5} breakPoints={breakPoints} style={{ width: '95%' }}>
        {offers && offers.map((product) => (
          <ContainerItems key={product.id}>
            <Image src={product.url} alt="imagem-do-produto" />
            <p>{product.name}</p>
            <p style={{ color: '#212121' }}>
              R$
              {' '}

              {product.price}
            </p>
            <Button>Peça agora</Button>
          </ContainerItems>
        ))}
      </Carousel>
    </Container>
  );
}

export default OfferCarousel;

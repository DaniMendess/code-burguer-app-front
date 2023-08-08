/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import HomeLogo from '../../assets/burger-home.png';
import { CategoryCarousel, OffersCarousel } from '../../components/index';
import { Container, HomeImg } from './style';

export function Home() {
  return (
    <Container>
      <HomeImg src={HomeLogo} alt="logo-da-home" />
      <CategoryCarousel />
      <OffersCarousel />

    </Container>
  );
}

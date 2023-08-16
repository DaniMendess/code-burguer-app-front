/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useLocation } from 'react-router-dom';

import Car from '../../assets/ico-car.png';
import Pessoa from '../../assets/ico-pessoa.png';
import {
  Container, ContainerLeft, PageLink, ContainerRight, ContainerText, Line, PageLinkLogOut,
} from './style';

export function Header() {
  const { pathname } = useLocation();

  return (
    <Container>

      <ContainerLeft>
        <PageLink to="/" isactive={pathname === '/' ? 'true' : ''}>
          Home
        </PageLink>
        <PageLink to="/produtos" isactive={pathname.includes('produtos') ? 'true' : ''}>
          Ver produtos
        </PageLink>
      </ContainerLeft>

      <ContainerRight>
        <PageLink to="/carrinho">
          <img src={Car} alt="logo-carrinho" />
        </PageLink>
        <Line />
        <PageLink>
          <img src={Pessoa} alt="logo-pessoa" />
        </PageLink>
        <ContainerText>
          <p>Olá Daniel</p>
          <PageLinkLogOut>
            Sair
          </PageLinkLogOut>
        </ContainerText>
      </ContainerRight>

    </Container>
  );
}

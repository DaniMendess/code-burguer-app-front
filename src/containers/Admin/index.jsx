/* eslint-disable import/no-named-as-default */
import React from 'react';

import { SideMenuAdmin } from '../../components/SideMenuAdmin';
import ListProduts from './ListProduts';
import Orders from './Orders';
import { Container, ContainerItems } from './style';

export function Admin() {
  return (
    <Container>
      <SideMenuAdmin />
      <ContainerItems>
        {/* <Orders /> */}
        <ListProduts />
      </ContainerItems>

    </Container>
  );
}

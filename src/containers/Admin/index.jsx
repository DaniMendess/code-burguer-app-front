/* eslint-disable import/no-named-as-default */
import React from 'react';

import Orders from './Orders';
import { Container } from './style';

export function Admin() {
  return (
    <Container>
      <Orders />
    </Container>
  );
}

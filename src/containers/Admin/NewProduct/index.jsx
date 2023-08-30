/* eslint-disable no-undef */
/* eslint-disable react/jsx-props-no-spreading */

import { Button } from '@mui/base';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import ReactSelect from 'react-select';

import api from '../../../services/api';
import {
  Container, Label, Input,
} from './style';

export function NewProduct() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get('products');

      setProducts(data);
    }

    loadOrders();
  }, []);

  return (
    <Container>
      <form>
        <Label>Nome</Label>
        <Input type="text" {...register('name')} />
        <Label>Preço</Label>
        <Input type="number" {...register('price')} />
        <Label>Escolha a imagem</Label>
        <Input type="file" accept="image/png, image/jpeg" />
        <ReactSelect />
        <Button>Adicionar produto</Button>
      </form>
    </Container>
  );
}

export default NewProduct;

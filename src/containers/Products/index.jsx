/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';

import ProductLogo from '../../assets/image-produtos.png';
import { CardProducts } from '../../components/index';
import api from '../../services/api';
import formatCurrency from '../../utils/formatCurrency';
import {
  Container, ProductImg, ButtonCategory, CategoryMenu, ProductsContainer,
} from './style';

export function Products() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setfilteredProducts] = useState([]);
  const [activedCategory, setActivedCategory] = useState(0);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories');
      const newCategory = [{ id: 0, name: 'Todas' }, ...data];

      setCategories(newCategory);
    }

    async function loadProducts() {
      const { data } = await api.get('products');

      const allProducts = data.map((product) => ({ ...product, formatedPrice: formatCurrency(product.price) }));

      setProducts(allProducts);
    }

    loadProducts();
    loadCategories();
  }, []);

  useEffect(() => {
    if (activedCategory === 0) {
      setfilteredProducts(products);
    } else {
      const newFilteredProducts = products.filter((product) => product.category_id === activedCategory);

      setfilteredProducts(newFilteredProducts);
    }
  }, [activedCategory, products]);

  return (
    <Container>
      <ProductImg src={ProductLogo} alt="logo-do-produto" />
      <CategoryMenu>
        {categories && categories.map((category) => {
          return <ButtonCategory key={category.id} onClick={() => { setActivedCategory(category.id); }} isActived={activedCategory === category.id}>{category.name}</ButtonCategory>;
        })}
      </CategoryMenu>
      <ProductsContainer>
        {filteredProducts && filteredProducts.map((product) => {
          return <CardProducts key={product.id} product={product} />;
        })}
      </ProductsContainer>

    </Container>
  );
}

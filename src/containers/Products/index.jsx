import React, { useState, useEffect } from 'react';

import ProductLogo from '../../assets/image-produtos.png';
import api from '../../services/api';
import {
  Container, ProductImg, ButtonCategory, CategoryMenu,
} from './style';

function Home() {
  const [categories, setCategories] = useState([]);

  const [activedCategory, setActivedCategory] = useState(0);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories');
      const newCategory = [{ id: 0, name: 'Todas' }, ...data];

      setCategories(newCategory);
    }

    loadCategories();
  }, []);
  return (
    <Container>
      <ProductImg src={ProductLogo} alt="logo-do-produto" />
      <CategoryMenu>
        {categories && categories.map((category) => {
          return <ButtonCategory key={category.id} onClick={() => { setActivedCategory(category.id); }} isActived={activedCategory === category.id}>{category.name}</ButtonCategory>;
        })}
      </CategoryMenu>

    </Container>
  );
}

export default Home;

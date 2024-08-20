import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Product from '../../../components/ProductCard';
import LinkButton from '../../../components/Button';
import { LiaArrowRightSolid as ArrowIcon } from 'react-icons/lia';
import { useProducts } from '../../../hooks/getData';
import { useLoaderData } from 'react-router-dom';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  width: 78%;
`;

const ProductWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 50px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const ViewAllProductButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  
  width: 100%:
  a {
    width: fit-content;
    height: fit-content;
  }
`;
const ViewAllProductButton = styled(LinkButton)``;

export default function Bestseller() {
  const [products, setProducts] = useLoaderData().data;

  useEffect(() => {
    (async () => {
      const response = await Promise.all([
        fetch(
          "https://fakestoreapi.com/products/category/men's clothing"
        ),
        fetch(
          "https://fakestoreapi.com/products/category/women's clothing"
        ),
      ]);
      const menCloths = await response[0].json()
      const womenCloths = await response[1].json()
      setProducts([...menCloths, ...womenCloths]);
    })();
  }, []);
  return (
    <Container>
      <h1>Our Bestseller</h1>
      <ProductWrapper>
        {products
          ? products.map((item) => {
              const name = item.title.substring(0, 15) + '...';
              const description = item.description.substring(0, 20) + '...';
              const price = Math.round(parseFloat(item.price) * 100) / 100;
              return (
                <Product
                  key={item.id}
                  name={name}
                  description={description}
                  currency="$"
                  discountPrice={price.toFixed(2)}
                  price={(price + 50).toFixed(2)}
                  productImageLink={item.image}
                  productPageURL={`shop/product/${item.id}`}
                  data={item}
                />
              );
            })
          : ''}
      </ProductWrapper>
      <ViewAllProductButtonWrapper>
        <ViewAllProductButton
          route="/shop"
          text="View All Products"
          icon={<ArrowIcon />}
        />
      </ViewAllProductButtonWrapper>
    </Container>
  );
}

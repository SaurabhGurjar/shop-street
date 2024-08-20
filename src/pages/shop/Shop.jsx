import NavBar from '../../sections/NavigationBar';
import Footer from '../../sections/Footer';
import Product from '../../components/ProductCard';
import styled from 'styled-components';
import MainContainer from '../../components/MainContainer';
import { useLoaderData } from 'react-router-dom';
import { useEffect } from 'react';

const ProductsContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
  align-items: center;
  width: 78%;
`;

export default function Products() {
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
  }, [products]);

  return (
    <MainContainer>
      <NavBar />
      <ProductsContainer>
        {products &&
          products.map((item) => {
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
                productPageURL={`product/${item.id}`}
                data={item}
              />
            );
          })}
      </ProductsContainer>
      <Footer />
    </MainContainer>
  );
}

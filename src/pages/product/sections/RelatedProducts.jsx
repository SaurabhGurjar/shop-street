import styled from 'styled-components';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Carousel from '../../../components/Carousel';
import Product from '../../../components/ProductCard';

const Container = styled.section`
  width: 100%;
`;

function RelatedProducts({ data }) {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    if (data) {
      (async () => {
        const productData = await (
          await fetch(
            `https://fakestoreapi.com/products/category/${data.category}`
          )
        ).json();
        setProducts(productData);
      })();
    }
  }, []);

  return (
    <Container>
      {products && (
        <Carousel
          title="Related Products"
          cards={products.map((item) => (
            <Product
              key={item.id}
              name={item.title.substring(0, 20)}
              description={item.description.substring(0, 50)}
              discountPrice={String(item.price)}
              price={(item.price + 50).toFixed(2)}
              currency="$"
              productImageLink={item.image}
              productPageURL={'../shop/product/' + item.id}
              data={item}
            />
          ))}
        />
      )}
    </Container>
  );
}

RelatedProducts.propTypes = {
  data: PropTypes.object,
};

export default RelatedProducts;

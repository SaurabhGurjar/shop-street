import styled from 'styled-components';
import Product from '../../../components/ProductCard';

const Container = styled.section`
  display: inline-block;
  text-align: center;
  width: 78%;
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  margin-top: 50px;
`;

export default function Bestseller() {
  return (
    <Container>
      <h1>Our Bestseller</h1>
      <ProductWrapper>
        <Product
          name="Roadster"
          description="Printed cotton T-shirt"
          productPageURL="/"
          productImageLink="#"
          currency="₹"
          discountPrice="500"
          price="1500"
        />
        <Product
          name="Roadster"
          description="Printed cotton T-shirt"
          productPageURL="/"
          productImageLink="#"
          currency="₹"
          discountPrice="500"
          price="1500"
        />
        <Product
          name="Roadster"
          description="Printed cotton T-shirt"
          productPageURL="/"
          productImageLink="#"
          currency="₹"
          discountPrice="500"
          price="1500"
        />
        <Product
          name="Roadster"
          description="Printed cotton T-shirt"
          productPageURL="/"
          productImageLink="#"
          currency="₹"
          discountPrice="500"
          price="1500"
        />
        <Product
          name="Roadster"
          description="Printed cotton T-shirt"
          productPageURL="/"
          productImageLink="#"
          currency="₹"
          discountPrice="500"
          price="1500"
        />
        <Product
          name="Roadster"
          description="Printed cotton T-shirt"
          productPageURL="/"
          productImageLink="#"
          currency="₹"
          discountPrice="500"
          price="1500"
        />
        <Product
          name="Roadster"
          description="Printed cotton T-shirt"
          productPageURL="/"
          productImageLink="#"
          currency="₹"
          discountPrice="500"
          price="1500"
        />
        <Product
          name="Roadster"
          description="Printed cotton T-shirt"
          productPageURL="/"
          productImageLink="#"
          currency="₹"
          discountPrice="500"
          price="1500"
        />
        <Product
          name="Roadster"
          description="Printed cotton T-shirt"
          productPageURL="/"
          productImageLink="#"
          currency="₹"
          discountPrice="500"
          price="1500"
        />
        <Product
          name="Roadster"
          description="Printed cotton T-shirt"
          productPageURL="/"
          productImageLink="#"
          currency="₹"
          discountPrice="500"
          price="1500"
        />
      </ProductWrapper>
    </Container>
  );
}

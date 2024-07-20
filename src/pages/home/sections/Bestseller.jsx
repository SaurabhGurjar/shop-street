import styled from 'styled-components';
import Product from '../../../components/ProductCard';
import LinkButton from '../../../components/Button';
import { LiaArrowRightSolid as ArrowIcon } from 'react-icons/lia';

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
      <ViewAllProductButtonWrapper>
        <ViewAllProductButton
          route="/products"
          text="View All Products"
          icon={<ArrowIcon />}
        />
      </ViewAllProductButtonWrapper>
    </Container>
  );
}

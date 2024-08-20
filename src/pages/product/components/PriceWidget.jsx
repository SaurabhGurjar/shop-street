import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  gap: 10px;
  .price {
    text-decoration: line-through;
    color: #cad5df;
  }
`;

function Price({ discountedPrice, price, currency = '₹' }) {
  return (
    <Container>
      <p className="discounted-price">
        {currency}
        {parseFloat(discountedPrice).toFixed(2)}
      </p>
      <p className="price">
        {currency}
        {parseFloat(price).toFixed(2)}
      </p>
    </Container>
  );
}

Price.propTypes = {
  discountedPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  currency: PropTypes.string,
};

export default Price;

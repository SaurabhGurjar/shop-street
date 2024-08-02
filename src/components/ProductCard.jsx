import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IoHeartOutline } from 'react-icons/io5';
import Price from '../pages/product/components/PriceWidget';

const Container = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  width: 250px;
  height: 420px;
  &:hover {
    button {
      display: flex;
    }
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e9edf1;
  width: 250px;
  height: 300px;
  img {
    max-width: 200px;
    max-height: 250px;
  }
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 15px 0;
  width: 100%;
  gap: 8px;

  h3 {
    font-size: 1.2em;
    font-weight: 600;
    text-align: left;
  }

  p {
    font-size: 1em;
    color: #31363f;
    text-align: left;
  }
`;

const AmountWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const Title = styled.h3``;
const ProductDescription = styled.p``;

const StyledButton = styled.button`
  position: absolute;
  display: ${(props) => (props.$isMobile ? 'flex' : 'none')};
  flex: 0 0 auto;
  justify-content: center;
  align-items: center;
  border: none;
  box-shadow: 0 0 1px 1px #fff;
  background-color: #fff;
`;

const AddToFavouriteButton = styled(StyledButton)`
  right: 20px;
  top: 20px;
  width: 30px;
  height: 30px;
  font-size: 1.2em;
  border-radius: 20px;
  z-index: 10;
`;

const AddToCartButton = styled(StyledButton)`
  width: 80%;
  padding: 15px;
  top: 240px;
  left: calc((100% - 80%) / 2);
  font-size: 1em;
  border-radius: 8px;
  font-weight: 500;
  z-index: 10;
`;

export default function Product({
  name = 'Product name',
  description = 'Product Description',
  discountPrice = '1000',
  price = '1500',
  currency = '₹',
  productImageLink,
  productPageURL,
  data,
}) {
  const alt = name;

  const handleAddToCart = () => {};

  const handleAddToFavourite = () => {};
  return (
    <Link to={productPageURL} state={data}>
      <Container>
        <ImageWrapper>
          <AddToFavouriteButton
            onClick={handleAddToFavourite}
            $isMobile={navigator.userAgentData.mobile}
          >
            <IoHeartOutline />
          </AddToFavouriteButton>
          <AddToCartButton
            onClick={handleAddToCart}
            $isMobile={navigator.userAgentData.mobile}
          >
            Add to cart
          </AddToCartButton>
          <img src={productImageLink} alt={alt} />
        </ImageWrapper>
        <TextWrapper>
          <Title>{name}</Title>
          <ProductDescription>{description}</ProductDescription>
          <AmountWrapper>
            <Price
              discountedPrice={discountPrice}
              price={price}
              currency={currency}
            />
          </AmountWrapper>
        </TextWrapper>
      </Container>
    </Link>
  );
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  discountPrice: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  productImageLink: PropTypes.string.isRequired,
  productPageURL: PropTypes.string.isRequired,
  data: PropTypes.object,
};

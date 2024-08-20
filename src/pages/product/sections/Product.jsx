import { useEffect, useState } from 'react';
import {
  Form,
  useLoaderData,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import styled from 'styled-components';
import Stars from '../../../components/ReviewStars';
import { LiaHeart } from 'react-icons/lia';
import RelatedProducts from './RelatedProducts';
import Quantity from '../components/QuantityWidget';
import Size from '../components/SizeWidget';
import Details from './MoreDetails';
import Color from '../components/ColorWidget';
import Price from '../components/PriceWidget';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: -60px;
  width: 78%;
  justify-content: center;
  align-items: center;
`;
const UpperSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-center;
  width: 100%;
  gap: 50px;
`;
const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  div {
    display: flex;
    gap: 25px;
  }
`;
const MainImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 650px;
  height: 650px;
  background-color: #e9edf1;
  img {
    width: 400px;
  }
`;
const ImageWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e9edf1;
  width: 100px;
  height: 100px;
  border: none;
  img {
    width: 80px;
    height: 80px;
  }
`;

const ProductInfoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 50px;
  width: 100%;
  height: 600px;
  button {
    cursor: pointer;
  }

  .product-details-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    gap: 30px;

    .product-header-wrapper {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      gap: 10px;
    }

    h1 {
      font-size: 1.5em;
      margin: 0;
      font-weight: bold;
    }
    .label {
      border-radius: 6px;
      background-color: rgba(0, 255, 0, 0.2);
      color: #00ff00;
      font-size: 0.9em;
      width: fit-content;
      padding: 2px 6px;
    }

    .button-container {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      button {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .favorite-button {
        padding: 8px;
        font-size: 1.3em;
        border-radius: 8px;
        border: 1px solid #000;
        background-color: #fff;
        color: #000;
        &:hover {
          background-color: #000;
          color: #fff;
        }
      }
      form {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        .cart-button {
          width: 200px;
          border-radius: 8px;
          padding: 8px 0;
          background-color: #000;
          color: #fff;
          border: 1px solid #000;
          font-size: 1em;
        }
      }
    }
  }
`;

export default function ProductDetails() {
  const states = useLoaderData();
  const [cart, setCart] = states.cartDataState;
  const [color, setColor] = useState('orange');
  const [size, setSize] = useState('s');
  const product = useLocation().state;
  const [mainImage, setMainImage] = useState(product.image);

  useEffect(() => {
    setMainImage(product.image);
  }, [product]);

  const handleImage = (image) => {
    setMainImage(image);
  }

  const handleAddToCart = (event) => {
    event.preventDefault();
    const newCart = [...cart];
    const productData = {
      id: product.id,
      title: product.title,
      image: mainImage,
      color: color,
      quantity: 1,
      size: size,
      price: parseFloat(product.price),
      currency: '$',
      deliveryCharges: 5,
    };
    newCart.push(productData);
    setCart(newCart);
  };
  return (
    <Container>
      {product ? (
        <>
          <UpperSection>
            <ImageContainer>
              <MainImageWrapper>
                <img src={mainImage} alt="product-image" />
              </MainImageWrapper>
              <div>
                <ImageWrapper onClick={() => handleImage(product.image)}>
                  <img src={product.image} alt="other-images" />
                </ImageWrapper>
                <ImageWrapper onClick={() => handleImage(product.image)}>
                  <img src={product.image} alt="other-images" />
                </ImageWrapper>
                <ImageWrapper onClick={() => handleImage(product.image)}>
                  <img src={product.image} alt="other-images" />
                </ImageWrapper>
                <ImageWrapper onClick={() => handleImage(product.image)}>
                  <img src={product.image} alt="other-images" />
                </ImageWrapper>
                <ImageWrapper onClick={() => handleImage(product.image)}>
                  <img src={product.image} alt="other-images" />
                </ImageWrapper>
              </div>
            </ImageContainer>
            <ProductInfoWrapper>
              <div className="product-details-wrapper">
                <div className="product-header-wrapper">
                  <h1>{product.title}</h1>
                  <p className="label">In stock</p>
                  <Stars
                    rating={product.rating.rate}
                    reviewCount={product.rating.count}
                  />
                  <Price
                    discountedPrice={product.price}
                    price={product.price + 50}
                    currency="$"
                  />
                </div>
                <p>{product.description.substring(0, 300)}</p>
                <Color state={[color, setColor]} />
                <Size state={[size, setSize]} />
                <div className="button-container">
                  <Form>
                    <Quantity id={product.id} state={[cart, setCart]} />
                    <button
                      type="submit"
                      className="cart-button"
                      onClick={handleAddToCart}
                    >
                      Add to Cart
                    </button>
                  </Form>
                  <button type="button" className="favorite-button">
                    <LiaHeart />
                  </button>
                </div>
              </div>
            </ProductInfoWrapper>
          </UpperSection>
          <Details data={product} />
          <RelatedProducts data={product} />
        </>
      ) : (
        'loading...'
      )}
    </Container>
  );
}

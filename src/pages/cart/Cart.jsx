import styled from 'styled-components';
import Card from './components/CartCard';
import MainContainer from '../../components/MainContainer';
import NavBar from '../../sections/NavigationBar';
import Footer from '../../sections/Footer';
import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { RxCross2 } from "react-icons/rx";

const Container = styled.section`
  width: 78%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: -100px;
`;

const CartItemWrapper = styled.div`
  width: 72%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 30px;
  border: 1px solid #000;
  border-radius: 20px;
  gap: 20px;

  .cart-box-header {
    width: 100%;
    display: flex;
    font-size: 1.5em;
    justify-content: space-between;
    button {
      display: flex;
      gap: 5px;
      justify-content: center;
      align-items: center;
      width: fit-content;
      height: fit-content;
      border: none;
      background: none;
      color: red;
      font-size: 0.7em;
    }
  }
  .cart-heading {
    display: flex;
    justify-content: space-between;
    width: 85%;
  }

  .number-of-items {
    font-size: 0.6em;
  }
`;

const CheckoutWrapper = styled.div`
  width: 25%;
  border-radius: 20px;
  background-color: #e9edf1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 10px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #999999;
  }

  .total-price {
    color: #000;
  }

  .checkout-button {
    padding: 10px;
    font-size: 1em;
    border-radius: 10px;
    background-color: #000;
    border: none;
    color: #fff;
  }
`;

function Cart() {
  const cartState = useLoaderData().cartDataState;
  const [allItems, setAllItems] = cartState;
  const [bill, setBill] = useState({ subTotal: 0, discount: 0, total: 0 });

  useEffect(() => {
    const newBill = { ...bill };
    newBill.subTotal = allItems.reduce(
      (totalCartItemPrice, item) =>
        totalCartItemPrice + parseFloat(item.price) * parseInt(item.quantity),
      0
    );
    newBill.discount =
      parseFloat(newBill.subTotal * 0.05) <= 100
        ? parseFloat(newBill.subTotal * 0.05)
        : 100;
    newBill.total = newBill.subTotal - newBill.discount;
    setBill(newBill);
  }, [allItems]);
  console.log({ bill, allItems });

  const handleClearCart = () => {
    setAllItems([]);
  };

  return (
    <MainContainer>
      <NavBar />
      <Container>
        <CartItemWrapper>
          <div className="cart-box-header">
            <span>
              Cart{' '}
              <span className="number-of-items">({allItems.length} items)</span>
            </span>
            <button onClick={handleClearCart}><RxCross2 /> Clear cart</button>
          </div>
          <div className="cart-heading">
            <span>Products</span>
            <span>Quantity</span>
            <span>Price</span>
          </div>
          {allItems
            ? allItems.map((item, index) => (
                <Card key={index} index={index} data={item} state={cartState} />
              ))
            : 'No item in cart!'}
        </CartItemWrapper>
        <CheckoutWrapper>
          <div>
            Subtotal{' '}
            <span>
              {allItems.length > 0 ? allItems[0].currency : ' '}
              {bill.subTotal.toFixed(2)}
            </span>
          </div>
          <div>
            Discount
            <span>
              {allItems.length > 0 ? allItems[0].currency : ''}
              {bill.discount.toFixed(2)}
            </span>
          </div>
          <div className="total-price">
            Total
            <span>
              {allItems.length > 0 ? allItems[0].currency : ''}
              {bill.total.toFixed(2)}
            </span>
          </div>
          <button className="checkout-button">Continue to checkout</button>
        </CheckoutWrapper>
      </Container>
      <Footer />
    </MainContainer>
  );
}

Cart.propTypes = {
  data: PropTypes.object,
};

export default Cart;

import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa6';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  outline: 1px solid #000;
  border-radius: 8px;
  padding: 4px 0;
  max-width: 100px;
  input {
    border: none;
    outline: none;
    font-size: 1em;
    width: 20px;
  }
  button {
    width: 30px;
    height: 30px;
    border: none;
    background: none;
    font-size: 0.8em;
  }
`;

export default function Quantity({ qty = 1, id, state = [] }) {
  const [quantity, setQuantity] = useState(parseInt(qty));
  const [allItems, setAllItems] = state;

  const handleQuantityChange = () => {
    const newAllItems = [...allItems];
    console.log(allItems);
    newAllItems.forEach((item) => {
      if (item.id === id) {
        item.quantity = quantity;
        setAllItems(newAllItems);
        return;
      }
    });
  };

  useEffect(() => {
    if (state.length > 0) {
      handleQuantityChange();
    }
  }, [quantity]);

  const handleQuantityIncreament = (event) => {
    event.preventDefault();
    if (quantity < 10) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
    }
  };

  const handleQuantityDecreament = (event) => {
    event.preventDefault();
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
    }
  };

  return (
    <Container>
      <button onClick={handleQuantityDecreament}>
        <FaMinus />
      </button>
      <input
        type="text"
        name="quantity"
        id="pq"
        value={quantity}
        onChange={handleQuantityChange}
      />
      <button onClick={handleQuantityIncreament}>
        <FaPlus />
      </button>
    </Container>
  );
}

Quantity.propTypes = {
  qty: PropTypes.oneOfType(PropTypes.number, PropTypes.string),
  state: PropTypes.array,
  id: PropTypes.number,
};

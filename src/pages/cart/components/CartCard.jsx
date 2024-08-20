import styled from 'styled-components';
import PropTypes from 'prop-types';
import Quantity from '../../product/components/QuantityWidget';
import { FaTrash } from 'react-icons/fa';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  border-radius: 20px;
  border: 1px solid #000;
  padding: 10px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .image-wrapper {
    width: 100px;
    height: 100px;
    background-color: #e9edf1;
    border-radius: 15px;
    img {
      max-width: 100px;
      max-height: 100px;
    }
  }

  .wrapper {
    width: 100%;
    justify-content: space-between;
    div {
      width: calc(100% / 3);
    }
  }
  .product-info-wrapper {
    flex-direction: column;
    align-items: flex-start;
  }

  .price-wrapper {
    font-size: 1.3em;
    justify-content: right;
  }
  .deleteBtn {
    background: none;
    border: none;
    font-size: 1em;
    color: red;
    margin: 0 15px;
  }
`;

function Card({ index, data, state }) {
  const [allItems, setAllItems] = state;

  const handleDelete = (itemIndex) => {
    const newAllItems = [];
    allItems.forEach((item, index) => {
      if (index !== itemIndex) {
        newAllItems.push(item);
      }
    });
    setAllItems(newAllItems);
  };
  return (
    <Container>
      <div className="image-wrapper">
        <img src={data.image} />
      </div>
      <div className="wrapper">
        <div className="product-info-wrapper">
          <h3>{data.title}</h3>
          colour: {data.color}
          {' | '}
          size: {data.size}
        </div>
        <Quantity qty={data.quantity} id={data.id} state={state} />
        <div className="price-wrapper">
          {data.currency}
          {data.price}
        </div>
      </div>
      <div className="button-wrapper">
        <button className="deleteBtn" onClick={() => handleDelete(index)}>
          <FaTrash />
        </button>
      </div>
    </Container>
  );
}

Card.propTypes = {
  index: PropTypes.number,
  data: PropTypes.object,
  state: PropTypes.array,
  billState: PropTypes.array,
};

export default Card;

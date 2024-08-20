import styled from 'styled-components';
import PropTypes from 'prop-types';
const Container = styled.div`
  margin-top: -10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  div {
    display: flex;
    gap: 15px;
  }
  button {
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 6px;
    font-size: 1em;
    outline: 1px solid black;
    background-color: #fff;
    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
  .active {
    background-color: black;
    color: #fff;
    &:hover {
      background-color: black;
    }
  }
`;

export default function Size({ state }) {
  const [size, setSize] = state;
  const handleSize = (size) => {
    setSize(size);
  };

  return (
    <Container>
      <h3>Size</h3>
      <div className="size-buttons-wrapper">
        <button
          className={size === 's' ? 'size-bottom active' : 'size-bottom'}
          onClick={() => handleSize('s')}
        >
          S
        </button>
        <button
          className={size === 'm' ? 'size-bottom active' : 'size-bottom'}
          onClick={() => handleSize('m')}
        >
          M
        </button>
        <button
          className={size === 'l' ? 'size-bottom active' : 'size-bottom'}
          onClick={() => handleSize('l')}
        >
          L
        </button>
        <button
          className={size === 'xl' ? 'size-bottom active' : 'size-bottom'}
          onClick={() => handleSize('xl')}
        >
          XL
        </button>
        <button
          className={size === 'xxl' ? 'size-bottom active' : 'size-bottom'}
          onClick={() => handleSize('xxl')}
        >
          XXL
        </button>
      </div>
    </Container>
  );
}

Size.propTypes = {
  state: PropTypes.array,
};

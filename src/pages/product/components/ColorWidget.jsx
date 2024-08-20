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
  }
  .orange {
    background-color: orange;
  }
  .purple {
    background-color: purple;
  }
  .yellow {
    background-color: yellow;
  }
  .black {
    background-color: black;
  }
  .green {
    background-color: green;
  }
  .blue {
    background-color: blue;
  }
`;

function Color({ state }) {
  const setColor = state[1];
  const handleColor = (color) => {
    setColor(color);
  };
  return (
    <Container>
      <h3>Colour</h3>
      <div className="color-buttons-wrapper">
        <button
          className="color-bottom orange"
          onClick={() => handleColor('orange')}
        ></button>
        <button
          className="color-bottom purple"
          onClick={() => handleColor('purple')}
        ></button>
        <button
          className="color-bottom blue"
          onClick={() => handleColor('blue')}
        ></button>
        <button
          className="color-bottom green"
          onClick={() => handleColor('green')}
        ></button>
        <button
          className="color-bottom black"
          onClick={() => handleColor('black')}
        ></button>
        <button
          className="color-bottom yellow"
          onClick={() => handleColor('yellow')}
        ></button>
      </div>
    </Container>
  );
}

Color.propTypes = {
  state: PropTypes.array,
};

export default Color;

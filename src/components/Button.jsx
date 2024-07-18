import styled from 'styled-components';
import { PropTypes } from 'prop-types';

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  padding: 0.8em 1em;
  background-color: black;
  border-radius: 6px;
  border: none;
  color: #fff;
  font-size: 14px;

  &:hover {
    color: #000;
    background-color: #fff;
    outline: 1px solid #000;
  }
  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

function Button({ text, icon, onClick }) {
  return (
    <StyledButton onClick={onClick}>
      {text ? text : ''}
      {icon ? <span>{icon}</span> : ''}
    </StyledButton>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.element,
  onClick: PropTypes.func,
};

export default Button;

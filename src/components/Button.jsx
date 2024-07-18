import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const StyledButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  padding: 0.8em 1em;
  background-color: black;
  border-radius: 6px;
  border: none;
  color: #fff;
  font-size: 16px;
  text-decoration: none;
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

function Button({ text, icon, route }) {
  return (
    <StyledButton to={route}>
      {text ? text : ''}
      {icon ? <span>{icon}</span> : ''}
    </StyledButton>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.element,
  route: PropTypes.string,
};

export default Button;

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

const StyledLink = styled(NavLink)`
  text-decoration: none;
  background-color: none;
  padding: 0.5em 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  border: none;
  color: #000;

  &:hover {
    border-bottom: 2px solid #000;
  }

  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

function Link({ text, icon, route }) {
  return (
    <StyledLink to={route}>
      {text}
      {icon ? <span>{icon}</span> : ''}
    </StyledLink>
  );
}

Link.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.element,
  route: PropTypes.string,
};

export default Link;

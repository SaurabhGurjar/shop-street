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

const ButtonLink = styled(StyledLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  padding: 0.8em 1em;
  margin-left: 10px;
  background-color: black;
  border-radius: 6px;
  border: none;
  color: #fff;
  font-size: 14px;
  width: fit-content;
  height: fit-content;

  &:hover {
    color: #000;
    background-color: #fff;
    outline: 1px solid #000;
    border: none;
  }
  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

function Link({ text, icon, route, isButton }) {
  return (
    <>
      {isButton ? (
        <ButtonLink to={route}>
          {text} {icon ? <span>{icon}</span> : ''}
        </ButtonLink>
      ) : (
        <StyledLink to={route}>
          {text}
          {icon ? <span>{icon}</span> : ''}
        </StyledLink>
      )}
    </>
  );
}

Link.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.element,
  route: PropTypes.string,
  isButton: PropTypes.bool,
};

export default Link;

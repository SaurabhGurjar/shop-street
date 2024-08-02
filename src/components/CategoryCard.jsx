import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledCard = styled.div`
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 20px;
  width: 250px;
  height: 320px;
  border: 1px solid #000;
  background: url(${(props) => props.$bgi});
  background-size: cover;
  background-repeat: no-repeat;

  > a {
    text-align: center;
    color: #000;
    background-color: #fff;
    font-size: 1em;
    padding: 15px;
    border-radius: 8px;
    width: 80%;

    &:hover {
      background-color: #000;
      color: #fff;
    }
  }
`;

function Card({ bgi, children }) {
  return <StyledCard $bgi={bgi}>{children}</StyledCard>;
}

Card.propTypes = {
  bgi: PropTypes.string,
  children: PropTypes.element,
};

export default Card;

import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 4px;
  padding: 20px;
  width: 100%;

  svg {
    font-size: 2em;
    margin-bottom: 10px;
  }
`;
function Service({ icon, title, description }) {
  return (
    <Container>
      {icon}
      <h4>{title}</h4>
      <p>{description}</p>
    </Container>
  );
}

Service.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Service;

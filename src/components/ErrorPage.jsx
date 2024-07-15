import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
`;

const Title = styled.h3``;

const Wrapper = styled.div`
  padding: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid blue;
  border-radius: 0.6em;
`;

const Para = styled.p``;
const BackLink = styled(Link)`
  text-decoration: none;
  color: Blue;
  font-weight: bold;
`;

export default function ErrorPage() {
  return (
    <Container>
      <Title>Oh no, this route doesn't exist!</Title>
      <Wrapper>
        <Para>
          You can go back to the home page by
          <BackLink to="/">clicking here</BackLink>, though!
        </Para>
      </Wrapper>
    </Container>
  );
}

import styled from 'styled-components';
import { HiOutlineMail } from 'react-icons/hi';
import { FaArrowRight } from 'react-icons/fa';
import { Form } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  height: 100%;
  color: #fff;

  form {
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
    padding: 8px 12px;
    border: 2px solid #fff;
    border-radius: 8px;

    > svg {
      font-size: 1.5em;
    }

    input {
      color: #fff;
      border: none;
      outline: none;
      background: none;
    }

    button {
      color: #fff;
      display: flex;
      border: none;
      background: none;
    }
  }
`;

export default function Subscribe() {
  return (
    <Container>
      <h4>Subscribe</h4>
      <p>
        Enter you email below to be the first to know about new collections and
        product launches.
      </p>
      <Form method="post" action="/event">
        <HiOutlineMail />
        <input type="email" name="email" required autoComplete="off" />
        <button type="submit">
          <FaArrowRight />
        </button>
      </Form>
    </Container>
  );
}

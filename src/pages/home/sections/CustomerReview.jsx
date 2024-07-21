import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';

import Carousel from '../../../components/Carousel';
import styled from 'styled-components';
import ReviewCard from '../../../components/CustomerReviewCard';

const CustomerReviewSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 50px 11%;
  background-color: #f3f5f8;
`;

const demoData = [
  {
    id: uuidv4(),
    name: 'Leslie Alexinder',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores aliquam adipisci exercitationem ut sint eos in asperiores sunt?',
    aboutPerson: 'Model',
    stars: 5,
  },
  {
    id: uuidv4(),
    name: 'Jocob Jones',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores aliquam adipisci exercitationem ut sint eos in asperiores sunt?',
    aboutPerson: 'Co-Founder',
    stars: 4.5,
  },
  {
    id: uuidv4(),
    name: 'Jenny Wilson',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores aliquam adipisci exercitationem ut sint eos in asperiores sunt?',
    aboutPerson: 'Fashion Designer',
    stars: 4.5,
  },
  {
    id: uuidv4(),
    name: 'Leslie Alexinder',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores aliquam adipisci exercitationem ut sint eos in asperiores sunt?',
    aboutPerson: 'Model',
    stars: 5,
  },
  {
    id: uuidv4(),
    name: 'Jocob Jones',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores aliquam adipisci exercitationem ut sint eos in asperiores sunt?',
    aboutPerson: 'Co-Founder',
    stars: 3.5,
  },
];
export default function CustomerReview() {
  const [review, setReview] = useState(null);

  useEffect(() => {
    const data = demoData.map((item) => item);
    setReview(data);
  }, []);

  const Cards = review
    ? review.map((item) => (
        <ReviewCard
          key={item.id}
          message={item.message}
          name={item.name}
          aboutPerson={item.aboutPerson}
          stars={item.stars}
        />
      ))
    : [];

  return (
    <CustomerReviewSection>
      <Carousel title="What our Customer say's" cards={Cards} />
    </CustomerReviewSection>
  );
}

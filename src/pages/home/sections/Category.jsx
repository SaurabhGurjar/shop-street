import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Carousel from '../../../components/Carousel';
import Card from '../../../components/CategoryCard';
import LinkButton from '../../../components/Button';
import { v4 as uuidv4 } from 'uuid';
import bgImage from '../../../assets/images/c1.png';

const demoData = [
  {
    id: uuidv4(),
    name: 'Casual man',
    image: bgImage,
  },
  {
    id: uuidv4(),
    name: 'Casual woman',
    image: bgImage,
  },
  
  {
    id: uuidv4(),
    name: 'Formal man',
    image: bgImage,
  },
  {
    id: uuidv4(),
    name: 'Formal Woman',
    image: bgImage,
  },
 
];

const CategoriesSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 78%;
  h1 {
    font-size: 2.1em;
  }
`;

export default function Category() {
  const [data, setData] = useState(null);
  const SCROLL_VALUE = 600;

  useEffect(() => {
      setData(demoData);
  }, []);
  
  const Cards = data
    ? data.map((item) => {
        return (
          <Card
            key={item.id}
            bgi={item.image}
          >
            <LinkButton text={item.name} />
          </Card>
        );
      })
    : [];
  return (
    <CategoriesSection>
      <Carousel
        title="Shop by Categories"
        cards={Cards}
        scrollValue={SCROLL_VALUE}
      />
    </CategoriesSection>
  );
}

import styled from 'styled-components';
import Carousel from '../../../components/Carousel';
import { v4 as uuidv4 } from 'uuid';
import bgImage from '../../../assets/images/c1.png';

const data = [
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
    name: 'Casual boy',
    image: bgImage,
  },
  {
    id: uuidv4(),
    name: 'Casual girl',
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
  {
    id: uuidv4(),
    name: 'Casual girl',
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
  {
    id: uuidv4(),
    name: 'Casual girl',
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

const CategoriesContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75%;
  height: 420px;
`;

export default function Category() {
  return (
    <CategoriesContainer>
      <Carousel title="Shop by Categories" cards={data} />
    </CategoriesContainer>
  );
}

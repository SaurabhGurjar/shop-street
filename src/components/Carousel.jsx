import { useRef } from 'react';

import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import Button from './Button';
import { BiLeftArrowAlt } from 'react-icons/bi';
import { BiRightArrowAlt } from 'react-icons/bi';

const CarouselContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  overflow: hidden;
  gap: 50px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 500;
  grid-row: 1 / 2;
  grid-column: 1 / 2;
`;

const ControlBtnWrapper = styled.div`
display: flex;
gap: 6px;
width: fit-content;
height: fit-content;
justify-content: center:
align-items: center;
grid-row: 1 / 2;
grid-column: 2 / 3;
justify-self: end;
`;

const ControlsButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 24px;
`;

const ChildrenWrapper = styled.div`
  overflow-x: scroll;
  display: flex;
  flex: 0 0 auto;
  gap: 50px;
  justify-content: flex-start;
  align-items: center;
  grid-row: 2 / 3;
  grid-column: 1 / 3;

  &::-webkit-scrollbar {
  display: none;
}
`;
const ChildCard = styled.div`
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 20px;
  width: 311px;
  height: 420px;
  border: 1px solid #000;
  background: url(${(props) => props.$bgi});
  background-size: contain;
  background-repeat: no-repeat;

  > a {
    text-align: center;
    color: #000;
    background-color: #fff;
    font-size: 1.2em;
    width: 85%;

    &:hover {
      background-color: #000;
      color: #fff;
    }
  }
`;

function Carousel({ title, cards }) {
  const SCROLL_VALUE = 714;
  const cardContainer = useRef(null);

  const handleLeft = () => {
    cardContainer.current.scrollLeft -= SCROLL_VALUE;
  }

  const handleRight = () => {
    cardContainer.current.scrollLeft += SCROLL_VALUE;
  }

  return (
    <CarouselContainer>
      <Title>{title}</Title>
      <ControlBtnWrapper>
        <ControlsButton onClick={handleLeft}>
          <BiLeftArrowAlt />
        </ControlsButton>
        <ControlsButton onClick={handleRight}>
          <BiRightArrowAlt />
        </ControlsButton>
      </ControlBtnWrapper>
      <ChildrenWrapper ref={cardContainer}>
        {cards
          ? cards.map((cat) => {
              return (
                <ChildCard key={cat.id} $bgi={cat.image}>
                  <Button text={cat.name} />
                </ChildCard>
              );
            })
          : 'No items in slider'}
      </ChildrenWrapper>
    </CarouselContainer>
  );
}

Carousel.propTypes = {
  title: PropTypes.string,
  cards: PropTypes.array,
};

export default Carousel;

import { useRef } from 'react';

import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { BiLeftArrowAlt } from 'react-icons/bi';
import { BiRightArrowAlt } from 'react-icons/bi';

const CarouselContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  overflow: hidden;
  width: 100%;
  gap: 50px;
`;

const Title = styled.h1`
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

const CardWrapper = styled.div`
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

function Carousel({ title, cards, scrollValue = 560 }) {
  const cardContainer = useRef(null);

  const handleLeft = () => {
    cardContainer.current.scrollLeft -= scrollValue;
  };

  const handleRight = () => {
    cardContainer.current.scrollLeft += scrollValue;
  };

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
      <CardWrapper ref={cardContainer}>
        {cards ? cards.map((item) => item) : 'Add items in slider'}
      </CardWrapper>
    </CarouselContainer>
  );
}

Carousel.propTypes = {
  title: PropTypes.string,
  cards: PropTypes.arrayOf(PropTypes.element),
  scrollValue: PropTypes.number,
};

export default Carousel;

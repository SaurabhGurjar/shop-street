import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FaStar as StarIcon } from 'react-icons/fa';
import { FaStarHalf as HalfStarIcon } from 'react-icons/fa';
import lazyBonesSloth from '../assets/avatars/avatar-lazybones-sloth.png';

const Container = styled.div`
  width: calc((100% / 3) - 50px);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex: 0 0 auto;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  background-color: #fff;
  padding: 20px;
  min-height: 200px;
  min-width: 300px;
`;

const StarsWrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  gap: 6px;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.5em;
  margin-bottom: -10px;
  width: 100%;
`;
const ActiveStar = styled(StarIcon)`
  color: #ffe234;
`;
const ActiveHalfStar = styled(HalfStarIcon)`
  color: #ffe234;
`;
const InActiveStar = styled(StarIcon)`
  color: #e9edf1;
`;

const MessageWrapper = styled.div``;
const PersonProfileWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;
const Message = styled.p`
  color: #000;
  font-size: 1em;
`;
const Image = styled.img`
  display: flex;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #e9edf1;
`;

const PersonNameHandleWrappper = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
  align-items: flex-start;
`;

const PersonName = styled.h4`
  font-size: 0.9em;
`;
const AboutPerson = styled.p`
  color: #d3d3d3;
  font-size: 0.75em;
`;

function getStars(stars) {
  const MAX_RATING = 5;
  const fullStars = Math.floor(stars);
  let halfStar = stars - Math.floor(stars) > 0;
  const ratingStars = [];
  for (let i = 1; i <= MAX_RATING; i++) {
    if (i <= fullStars) {
      ratingStars.push(<ActiveStar key={i} />);
    } else if (i > fullStars) {
      if (halfStar) {
        ratingStars.push(<ActiveHalfStar key={i} />);
        halfStar = false;
      } else {
        ratingStars.push(<InActiveStar key={i} />);
      }
    }
  }
  return ratingStars;
}

function ReviewCard({
  message,
  name,
  aboutPerson,
  stars = 4.5,
  imageUrl = lazyBonesSloth,
}) {
  return (
    <Container>
      <StarsWrapper>
        {getStars(stars).map((item) => item)}
        {stars}
      </StarsWrapper>
      <MessageWrapper>
        <Message>{message}</Message>
      </MessageWrapper>
      <PersonProfileWrapper>
        <Image src={imageUrl} alt="avatar" />
        <PersonNameHandleWrappper>
          <PersonName>{name}</PersonName>
          <AboutPerson>{aboutPerson}</AboutPerson>
        </PersonNameHandleWrappper>
      </PersonProfileWrapper>
    </Container>
  );
}

ReviewCard.propTypes = {
  message: PropTypes.string,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  aboutPerson: PropTypes.string,
  stars: PropTypes.number,
};

export default ReviewCard;

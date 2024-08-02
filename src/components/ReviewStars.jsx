import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaStar as StarIcon } from 'react-icons/fa';
import { FaStarHalf as HalfStarIcon } from 'react-icons/fa';

const StarsWrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  gap: 6px;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.2em;
  width: 100%;
  .rating {
    color: #cad5df;
    background: none;
  }
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

function getStars(stars) {
  const MAX_RATING = 5;
  let fullStars = Math.floor(stars);
  let halfStar = stars - fullStars > 0.5;
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

export default function Stars({ rating, reviewCount }) {
  const stars = getStars(parseFloat(rating));

  return (
    <StarsWrapper>
      {stars.map((item) => item)}
      <p className="rating">
        {rating} ({reviewCount} Reviews)
      </p>
    </StarsWrapper>
  );
}

Stars.propTypes = {
  rating: PropTypes.number,
  reviewCount: PropTypes.number,
};

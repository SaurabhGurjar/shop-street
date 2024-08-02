import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import c1 from '../assets/images/c1.png';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 50px;
`;
const StoriesCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  flex-wrap: wrap;
  width: 100%;
`;
const StoriesCard = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e9edf1;
  width: 300px;
  height: 300px;
  &:hover {
    a {
      display: flex;
    }
  }
`;

const Image = styled.img`
  display: flex;
  flex: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Button = styled(Link)`
  position: absolute;
  justify-content: center;
  align-items: center;
  left: calc(50% - 25px);
  top: calc(50% -25px);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff;
  border: none;
  display: none;
`;

const InstagramIcon = styled(FaInstagram)`
  font-size: 1.9em;
  z-index: 10;
`;

function SocialStories({
  stories = [
    { id: uuidv4(), image: c1, link: '/instagram' },
    { id: uuidv4(), image: c1, link: '/' },
    { id: uuidv4(), image: c1, link: '/' },
    { id: uuidv4(), image: c1, link: '/' },
  ],
}) {
  return (
    <Container>
      <h1>Our Instagram Stories</h1>
      <StoriesCardWrapper>
        {stories.map((item, index) => {
          if (index <= 4) {
            return (
              <StoriesCard key={item.id}>
                <Image src={item.image} alt="Instagram stories" />
                <Button to={item.link}>
                  <InstagramIcon />
                </Button>
              </StoriesCard>
            );
          }
        })}
      </StoriesCardWrapper>
    </Container>
  );
}

SocialStories.propTypes = {
  stories: PropTypes.arrayOf(PropTypes.object),
};

export default SocialStories;

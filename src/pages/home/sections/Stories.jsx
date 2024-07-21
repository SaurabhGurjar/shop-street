import styled from 'styled-components';
import SocialStories from '../../../components/SocialMediaStories';

const StoriesContainer = styled.section`
  width: 78%;
`;

export default function Stories() {
  return (
    <StoriesContainer>
      <SocialStories />
    </StoriesContainer>
  );
}

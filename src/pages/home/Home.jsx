import styled from 'styled-components';

import NavBar from '../../sections/NavigationBar';
import HeroSection from './sections/Hero';
import Category from './sections/Category';
import Bestseller from './sections/Bestseller';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 150px;
`;

export default function Home() {
  return (
    <MainContainer>
      <NavBar />
      <HeroSection />
      <Category />
      <Bestseller />
    </MainContainer>
  );
}

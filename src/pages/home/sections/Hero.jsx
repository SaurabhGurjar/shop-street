import Button from '../../../components/Button';
import styled from 'styled-components';
import banner from '../assets/images/hero-banner.jpg';
import { LiaArrowRightSolid } from 'react-icons/lia';

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  justify-content: center;
  align-items: flex-start;
  padding: 10em;
  max-width: 1780px;
  max-height: 820px;
  width: 100vw;
  height: 90vh;
  background: url(${banner});
  background-size: auto;
  background-repeat: no-repeat;
`;
const TextWrapper = styled.div`
  display: flex;
  height: fit-content;
  width: fit-content;
  flex-direction: column;
  gap: 0.5rem;
`;
const Title = styled.h1`
  font-size: 64px;
  font-weight: bold;
`;

const SuperTitle = styled.h2`
  font-size: 42px;
  font-weight: 400;
`;

const SubTitle = styled.h3`
  font-size: 32px;
  font-weight: 400;
  margin-bottom: 20px;
`;

const ShopButton = styled(Button)`
  font-size: 22px;
`;

export default function HeroSection() {
  return (
    <HeroContainer>
      <TextWrapper>
        <SuperTitle>Classic Exclusive</SuperTitle>
        <Title>Women's Collection</Title>
        <SubTitle>UP TO 40% OFF</SubTitle>
      </TextWrapper>
      <ShopButton text="Shop Now" icon={<LiaArrowRightSolid />} route="/shop" />
    </HeroContainer>
  );
}

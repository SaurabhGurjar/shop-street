import LinkButton from '../../../components/Button';
import styled from 'styled-components';
import banner from '../../../assets/images/hero-banner.jpg';
import { LiaArrowRightSolid } from 'react-icons/lia';

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 100px;
  max-width: 1780px;
  max-height: 820px;
  width: 100vw;
  height: 90vh;
  background: url(${banner});
  background-size: auto;
  background-repeat: no-repeat;
  margin-top: -120px;
`;
const TextWrapper = styled.div`
  display: flex;
  height: fit-content;
  width: fit-content;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 4em;
  font-weight: bold;
  margin: 0;
`;

const SuperTitle = styled.h2`
  font-size: 3em;
  font-weight: 400;
  margin: 0;
`;

const SubTitle = styled.h3`
  font-size: 1.2em;
  font-weight: 400;
  margin-bottom: 20px;
`;

const ShopButton = styled(LinkButton)`
  font-size: 1em;
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

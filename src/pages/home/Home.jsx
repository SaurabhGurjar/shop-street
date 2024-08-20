import MainContainer from '../../components/MainContainer';
import NavBar from '../../sections/NavigationBar';
import HeroSection from './sections/Hero';
import Category from './sections/Category';
import Bestseller from './sections/Bestseller';
import CustomerReview from './sections/CustomerReview';
import Stories from './sections/Stories';
import Services from './sections/Services';
import Footer from '../../sections/Footer';

export default function Home() {
  return (
    <MainContainer>
      <NavBar />
      <HeroSection />
      <Category />
      <Bestseller />
      <CustomerReview />
      <Stories />
      <Services />
      <Footer />
    </MainContainer>
  );
}

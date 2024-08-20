import NavBar from '../../sections/NavigationBar';
import Footer from '../../sections/Footer';
import ProductDetails from './sections/Product';
import MainContainer from '../../components/MainContainer';

export default function ProductPage() {
  return (
    <MainContainer>
      <NavBar />
      <ProductDetails />
      <Footer />
    </MainContainer>
  );
}

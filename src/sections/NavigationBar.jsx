import Link from '../components/NavLink';
import styled from 'styled-components';
import { LiaHeart } from 'react-icons/lia';
import { RiSearchLine } from 'react-icons/ri';
import { IoBagOutline } from 'react-icons/io5';
import Logo from '../components/Logo';
import LinkButton from '../components/Button';
import { useLoaderData } from 'react-router-dom';

const navIconWidth = '20px';
const navIconHeight = '20px';

const ShoppingBag = styled(IoBagOutline)`
  width: ${navIconWidth};
  height: ${navIconHeight};
`;

const Search = styled(RiSearchLine)`
  width: ${navIconWidth};
  height: ${navIconHeight};
`;
const Favourite = styled(LiaHeart)`
  width: ${navIconWidth};
  height: ${navIconHeight};
`;

const NavContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10vh;
  padding: 10px;
  max-width: 85vw;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  nav {
    display: flex;
    gap: 2em;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
`;

const Span = styled.span`
  position: relative;
  &::after {
    position: absolute;
    text-align: center;
    font-size: 0.7em;
    font-weight: bold;
    content: '${(props) => props.$cartItems}';
    width: 18px;
    height: 18px;
    border-radius: 10px;
    top: 23px;
    right: -9px;
    color: white;
    background-color: black;
    z-index: -10;
  }
`;

function NavBar() {
  const state = useLoaderData();
  const cart = state.cartDataState;
  return (
    <NavContainer>
      <Wrapper>
        <Logo />
      </Wrapper>
      <Wrapper>
        <nav>
          <Link text="Home" route="/" />
          <Link text="Shop" route="/shop" state={cart} />
          <Link text="Our Story" route="/" />
          <Link text="Blog" route="/" />
          <Link text="Contact Us" route="/" />
        </nav>
      </Wrapper>
      <Wrapper>
        <nav>
          <Link route="/" icon={<Search />} />
          <Link route="/" icon={<Favourite />} />
          <Span className="cart-icon" $cartItems={cart?.[0]?.length ?? 0}>
            <Link route="/cart" icon={<ShoppingBag />} state={cart} />
          </Span>
          <LinkButton text="Login" route="/login" />
        </nav>
      </Wrapper>
    </NavContainer>
  );
}

export default NavBar;

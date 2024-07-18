import Link from '../components/NavLink';
import styled from 'styled-components';
import { LiaHeart } from 'react-icons/lia';
import { RiSearchLine } from 'react-icons/ri';
import { IoBagOutline } from 'react-icons/io5';
import Logo from '../components/Logo';

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

const NavContainer = styled.div`
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

  & > nav {
    display: flex;
    gap: 2em;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
`;

function NavBar() {
  return (
    <NavContainer>
      <Wrapper>
        <Logo />
      </Wrapper>
      <Wrapper>
        <nav>
          <Link text="Home" route="/" />
          <Link text="Shop" route="/shop" />
          <Link text="Our Story" route="/" />
          <Link text="Blog" route="/" />
          <Link text="Contact Us" route="/" />
        </nav>
      </Wrapper>
      <Wrapper>
        <nav>
          <Link route="/" icon={<Search />} />
          <Link route="/" icon={<Favourite />} />
          <Link route="/" icon={<ShoppingBag />} />
          <Link text="Login" route="/login" isButton={true} />
        </nav>
      </Wrapper>
    </NavContainer>
  );
}

export default NavBar;

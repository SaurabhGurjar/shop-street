import styled from 'styled-components';
import Logo from '../components/Logo';
import Subscribe from '../components/Subscribe';
import { HiOutlineMail } from 'react-icons/hi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { TbPhoneCall } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import visa from '../assets/payment/visa.png';
import mastercard from '../assets/payment/mastercard.png';
import paypal from '../assets/payment/paypal.png';
import upi from '../assets/payment/upi.png';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 50px calc((100% - 78%) / 2);
  padding-bottom: 0;
  background-color: #000;
  color: #fff;
`;

const UpperSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 15px;
    max-width: calc(78% / 4);
    height: 100%;
    &:first-child {
      margin-bottom: 15px;
    }
  }
  span {
    font-size: 1.2em;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;

    div {
      svg {
        width: 25px;
        height: 25px;
      }
    }
  }
  a {
    color: #fff;
  }
  img {
    width: fit-content;
  }
`;

const LowerSection = styled(UpperSection)`
    align-items: center;
  margin-top: 30px;
  padding: 10px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.7);

  span {
  gap: 20px;
  }

  img {
    width: 50px;
  }
  div {
  max-width: none;
  width: fit-content;
  }
`;

const StyledLogo = styled(Logo)`
  margin: 40px;
`;

export default function Footer() {
  return (
    <Container>
      <UpperSection>
        <div>
          <StyledLogo isWhite={true} />
          <span>
            <div>
              <TbPhoneCall />
            </div>
            <p>(201)559-0954</p>
          </span>
          <span>
            <div>
              <HiOutlineMail />
            </div>
            <p>contect@atshopstreet.com</p>
          </span>
          <span>
            <div>
              <HiOutlineLocationMarker />
            </div>
            <p>240 3rd floor Techflix-complex Roorkee Uttarakhand IN</p>
          </span>
        </div>
        <div>
          <h4>Information</h4>
          <Link to="/">My Account</Link>
          <Link to="/">Login</Link>
          <Link to="/">My Cart</Link>
          <Link to="/">My Wishlist</Link>
          <Link to="/">Checkout</Link>
        </div>
        <div>
          <h4>Services</h4>
          <Link to="/">About</Link>
          <Link to="/">Carrers</Link>
          <Link to="/">Delivery information</Link>
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Term & Conditions</Link>
        </div>
        <Subscribe />
      </UpperSection>
      <LowerSection>
        <span>
          <img src={visa} alt="payment-method" />
          <img src={mastercard} alt="payment-method" />
          <img src={upi} alt="payment-method" />
          <img src={paypal} alt="payment-method" />
        </span>
        <div>
          <p>
            {String.fromCharCode(169)} 2024 Shopstreet All Rights are Reseverd
          </p>
        </div>
        <span>
          <Link to="/"><FaFacebook /></Link>
          <Link to="/"><FaInstagram /></Link>
          <Link to="/"><FaXTwitter /></Link>
        </span>
      </LowerSection>
    </Container>
  );
}

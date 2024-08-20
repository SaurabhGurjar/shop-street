import styled from 'styled-components';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import Service from '../../../components/Service';
import { LuBaggageClaim } from 'react-icons/lu';
import { FaMoneyBillTransfer } from 'react-icons/fa6';
import { RiCustomerService2Line } from 'react-icons/ri';
import { MdPayment } from 'react-icons/md';

const Container = styled.section`
  width: 78%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;
function Services({
  services = [
    {
      icon: <LuBaggageClaim />,
      title: 'Free Shipping',
      description: `Free shipping for order above ₹500`,
    },
    {
      icon: <FaMoneyBillTransfer />,
      title: 'Money Guarantee',
      description: `Within 7 day for an exchange`,
    },
    {
      icon: <RiCustomerService2Line />,
      title: 'Online Support',
      description: `24 hours a day 7 days a week`,
    },
    {
      icon: <MdPayment />,
      title: 'Flexible Payment',
      description: `Pay with UPI, Debit, Credit card`,
    },
  ],
}) {
  return (
    <Container>
      {services.map((item) => (
        <Service
          key={uuidv4()}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </Container>
  );
}

Services.propTypes = {
  services: PropTypes.arrayOf(PropTypes.object),
};

export default Services;
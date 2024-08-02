import PropTypes from 'prop-types';
import logo from '/logo.png';
import logoWhite from '/logo-white.png';
function Logo({ isWhite = false }) {
  return <img src={isWhite ? logoWhite : logo} />;
}

Logo.propTypes = {
  isWhite: PropTypes.bool,
};

export default Logo;
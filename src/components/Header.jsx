import PropTypes from "prop-types"

function Header({ name }) {
  return (
    <header>
      <div className="container">
        <h2>{name}</h2>
      </div>
    </header>
  );
};

Header.propTypes = {
  name: PropTypes.string
};

export default Header;

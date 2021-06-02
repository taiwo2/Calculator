import React from 'react';

import PropTypes from 'prop-types';

const Button = ({ name, HandleClick }) => (
  <div>
    <button onClick={() => HandleClick} className="buttons" type="button">
      { name }
    </button>
  </div>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  HandleClick: PropTypes.func.isRequired,
};

export default Button;

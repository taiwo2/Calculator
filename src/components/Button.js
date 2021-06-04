import React from 'react';

import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    name, color, half, HandleClick,
  } = props;
  const styling = {
    width: half ? '50%' : '25%',
    background: color,
  };
  return (
    <div>
      <button
        onClick={() => HandleClick}
        className="buttons"
        style={styling}
        type="button"
      >
        { name }
      </button>
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  HandleClick: PropTypes.func.isRequired,
  half: false,
  color: 'orange',
};

Button.defaultProps = {
  half: false,
  color: 'orange',
};

export default Button;

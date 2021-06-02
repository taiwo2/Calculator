import React from 'react';

import PropTypes from 'prop-types';

const Button = (props) => {
  const { name } = props;
  return (
    <div>
      <button className="buttons" type="button">
        { name }
      </button>
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;

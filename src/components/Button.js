import React from 'react';

import PropTypes from 'prop-types';

const styles = (color, size) => ({
  backgroundColor: color,
  width: size ? '50%' : '25%',
});

export default function Button({
  button,
  wide = false,
  color = '#f5913e',
  handleClick,
}) {
  return (
    <input
      type="button"
      value={button}
      style={styles(color, wide)}
      onClick={() => handleClick(button)}
    />
  );
}

Button.propTypes = {
  button: PropTypes.string,
  wide: PropTypes.bool,
  color: PropTypes.string,
  handleClick: PropTypes.func,
};

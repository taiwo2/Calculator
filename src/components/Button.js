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
  HandleClick,
}) {
  return (
    <input
      type="button"
      value={button}
      style={styles(color, wide)}
      onClick={() => HandleClick(button)}
    />
  );
}

Button.propTypes = {
  button: PropTypes.string.isRequired,
  wide: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  HandleClick: PropTypes.func.isRequired,
};

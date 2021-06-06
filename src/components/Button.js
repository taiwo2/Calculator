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
}) {
  return (
    <input
      type="button"
      value={button}
      style={styles(color, wide)}
    />
  );
}

Button.propTypes = {
  button: PropTypes.string.isRequired,
  wide: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

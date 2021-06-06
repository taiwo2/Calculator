import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ total = '0' }) => <div className="display">{total}</div>;

Display.propTypes = {
  total: PropTypes.string.isRequired,
};

export default Display;

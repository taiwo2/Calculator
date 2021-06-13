import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result = '0' }) => <div className="display" data-testid='show-panel'>{result.toString()}</div>;

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;

import React from 'react'
import PropTypes from 'prop-types'

const Button = props => {
  const { name } = props
  return (
    <div>
      <button className='button' type='button'>
          {name}
      </button>  
    </div>
  )
}

Button.prototype = {
  name: PropTypes.string.isRequired,
};

export default Button

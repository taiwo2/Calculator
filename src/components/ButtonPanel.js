import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const groupOne = [
  { btn: 'AC', color: 'e0e0e0' },
  { btn: '+/-', color: 'e0e0e0' },
  { btn: '%', color: 'e0e0e0' },
  { btn: '÷' },
];
const groupTwo = [
  { btn: '7', color: 'e0e0e0' },
  { btn: '8', color: 'e0e0e0' },
  { btn: '9', color: 'e0e0e0' },
  { btn: 'X' },
];
const groupThree = [
  { btn: '4', color: 'e0e0e0' },
  { btn: '5', color: 'e0e0e0' },
  { btn: '6', color: 'e0e0e0' },
  { btn: '-' },
];
const groupFour = [
  { btn: '1', color: 'e0e0e0' },
  { btn: '2', color: 'e0e0e0' },
  { btn: '3', color: 'e0e0e0' },
  { btn: '+' },
];
const groupFive = [
  { btn: '0', color: 'e0e0e0', wide: true },
  { btn: '.', color: 'e0e0e0' },
  { btn: '=' },
];

export default function ButtonPanel({ handleClick }) {
  return (
    <div className="buttonpanel" data-testid='button-panel'>
      <div>
        {groupOne.map((item) => (
          <Button
            button={item.btn}
            key={item.btn}
            wide={item.wide}
            color={item.color}
            handleClick={handleClick}
          />
        ))}
      </div>
      <div>
        {groupTwo.map((item) => (
          <Button
            button={item.btn}
            key={item.btn}
            wide={item.wide}
            color={item.color}
            handleClick={handleClick}
          />
        ))}
      </div>
      <div>
        {groupThree.map((item) => (
          <Button
            button={item.btn}
            key={item.btn}
            wide={item.wide}
            color={item.color}
            handleClick={handleClick}
          />
        ))}
      </div>
      <div>
        {groupFour.map((item) => (
          <Button
            button={item.btn}
            key={item.btn}
            wide={item.wide}
            color={item.color}
            handleClick={handleClick}
          />
        ))}
      </div>
      <div>
        {groupFive.map((item) => (
          <Button
            button={item.btn}
            key={item.btn}
            wide={item.wide}
            color={item.color}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
}

ButtonPanel.propTypes = {
  handleClick: PropTypes.func,
};

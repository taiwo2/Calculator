import React from 'react';
// eslint-disable-next-line import/no-named-as-default
import Button from './Button';

const nums = ['7', '8', '9', 'x'];
const nums1 = ['4', '5', '6', '-'];
const nums2 = ['1', '2', '3', '+'];
const nums3 = ['0', '.', '='];
const topOps = ['AC', '+/-', '%', '÷'];
const ButtonPanel = () => (
  <div>
    <div className="buttonpanel">
      <div className="top-btn">
        {topOps.map((top) => (
          <Button name={top} key={top} />
        ))}
      </div>
      <div className="top-btn">
        {nums.map((num) => (
          <Button name={num} key={num} />
        ))}
      </div>
      <div className="top-btn">
        {nums1.map((num) => (
          <Button name={num} key={num} />
        ))}
      </div>
      <div className="top-btn">
        {nums2.map((num) => (
          <Button name={num} key={num} />
        ))}
      </div>
      <div className="top-btn">
        {nums3.map((num) => (
          <Button name={num} key={num} />
        ))}
      </div>
    </div>
  </div>
);

export default ButtonPanel;

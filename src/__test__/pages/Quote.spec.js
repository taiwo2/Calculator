import React from 'react';
import renderer from 'react-test-renderer';
import Qoute from '../../components/Qoute';

test('should correctly render Quote page', () => {
  const component = renderer.create(<Qoute />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

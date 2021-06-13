import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import NavBar from '../../components/NavBar';

test('should render the Header component', () => {
  render(
    <Router>
      <NavBar />
    </Router>,
  );
  const header = screen.getAllByTestId('header');
  expect(header[0]).toHaveTextContent('Math Magicians');
  expect(header[0]).toHaveTextContent('Home');
  expect(header[0]).toHaveTextContent('Calculator');
  expect(header[0]).toHaveTextContent('Quote');
});

import React from 'react';
import { render } from '@testing-library/react';
import Usuario from './Usuario';

test('renders learn react link', () => {
  const { getByText } = render(<Usuario />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

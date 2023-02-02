import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './';

const title = 'Test Title';
const subtitle = 'Test Subtitle';
const img = { src: '/test.jpg', alt: 'Test Alt' };

test('renders Header component with title, subtitle, and image', () => {
  render(
    <Header title={title} subtitle={subtitle} img={img} />
  );

  expect(screen.getByRole("heading", { name: title })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: subtitle })).toBeInTheDocument();
  expect(screen.getByRole("img", { name: img.alt })).toBeInTheDocument();
});

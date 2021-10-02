import { render, screen } from '@testing-library/react';
import App from './App';

it('render the title', async = ()=> {
  render(<App title = "header"/>);
  const headingElement = screen.getByText(/header/i);
  expect(headingElement).toBeInTheDocument();
})
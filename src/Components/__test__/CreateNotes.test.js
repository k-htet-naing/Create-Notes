import { render, screen } from '@testing-library/react';
import CreateNotes from '../CreateNotes';

it('renders learn react link', () => {
  render(<CreateNotes />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Navbar }  from '..';

jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

describe('Navbar Component', () => {
  it('Shold render correcly', async () => {
    const { findByTestId } = render(<Navbar />);
 
    const navbar = await findByTestId('navbar')
    expect(navbar).toBeInTheDocument();
  });

  it('Shold have three menu', async () => {
    const { findAllByRole } = render(<Navbar />);
 
    const anchors = await findAllByRole('link')
    expect(anchors.length).toBe(3);
  });

  it('Shold have have active class name on home', async () => {
    const { findByAltText } = render(<Navbar />);
 
    const homeLink = await findByAltText('home');
    expect(homeLink).toHaveClass('icon_active');
  });
})
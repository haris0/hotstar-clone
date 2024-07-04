import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import WatchlistPage from '../page'
import { useWatchlistContext } from '@/context/WatchlistContext';
import { mockContent } from '../__mock__/content.mock';

jest.mock('@/context/WatchlistContext', () => ({
  useWatchlistContext: jest.fn(),
}));


describe('Watchlist Page', () => {
  it('Shold render correcly', async () => {
    (useWatchlistContext as jest.Mock).mockReturnValue({
      watchlist: []
    })
    const { findByText } = render(<WatchlistPage />);
 
    const emtpyText = await findByText('Your watchlist will goes here')
    expect(emtpyText).toBeInTheDocument();
  });

  it('Shold render watchlist content', async () => {
    (useWatchlistContext as jest.Mock).mockReturnValue({
      watchlist: [
        mockContent,
      ]
    })
    const { findAllByRole } = render(<WatchlistPage />);
 
    const watchlistContent = await findAllByRole('img')
    expect(watchlistContent.length).toBe(1);
  });
})
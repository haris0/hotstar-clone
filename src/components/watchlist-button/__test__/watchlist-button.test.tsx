import '@testing-library/jest-dom'
import { act, fireEvent, render } from '@testing-library/react'
import WatchlistButton  from '..'
import { mockContent } from '../__mock__/content.mock';
import { useWatchlistContext } from '@/context/WatchlistContext';

const mockFn = jest.fn();

jest.mock('@/context/WatchlistContext', () => ({
  useWatchlistContext: () => ({
    addWatchlist: mockFn,
    removeWatchlist: mockFn,
    checkWatchlist: mockFn,
  }),
}));


describe('Watchlist Button Component', () => {
  it('Shold render correcly', async () => {
    const { checkWatchlist } = useWatchlistContext();
    (checkWatchlist as jest.Mock).mockReturnValue(false);
    const { findByText } = render(<WatchlistButton content={mockContent} />);
 
    const text = await findByText('+ Add to watchlist')
    expect(text).toBeInTheDocument();
  });

  it('Shold trigger add watchlist', async () => {
    const { checkWatchlist } = useWatchlistContext();
    (checkWatchlist as jest.Mock).mockReturnValue(false);
    const { findByText } = render(<WatchlistButton content={mockContent} />);
    const text = await findByText('+ Add to watchlist');

    act(() => {
      fireEvent.click(text);
    })

    expect(mockFn).toHaveBeenCalled();
  })

  it('Shold render added button', async () => {
    const { checkWatchlist } = useWatchlistContext();
    (checkWatchlist as jest.Mock).mockReturnValue(true);
    const { findByText } = render(<WatchlistButton content={mockContent} />);
 
    const text = await findByText('√ Added to watchlist')
    expect(text).toBeInTheDocument();
  });
})
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import HomePage from '../page'
import WatchlistContextProvider from '@/context/WatchlistContext';
import { mockMovieList } from '../__mock__/movie.mock';
import { mockTvList } from '../__mock__/tv.mock';

jest.mock('@/repositories/getTopRated', () => ({
  getTopRated: jest.fn().mockImplementationOnce(() => Promise.resolve({
    results: mockMovieList,
  })),
}));
jest.mock('@/repositories/getTrendingMovie', () => ({
  getTrendingMovie: jest.fn().mockImplementationOnce(() => Promise.resolve({
    results: mockMovieList,
  })),
}));
jest.mock('@/repositories/getTrendingTv', () => ({
  getTrendingTv: jest.fn().mockImplementationOnce(() => Promise.resolve({
    results: mockTvList
  })),
}));


Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe('Home Page', () => {
  it('Shold render correcly', async () => {
    const HomePageResolved = await HomePage();
    const { findAllByRole } = render(
      <WatchlistContextProvider>
        {HomePageResolved}
      </WatchlistContextProvider>
    );
 
    const allCOntent = await findAllByRole('img')
    expect(allCOntent.length).toBe(29);
  });
})
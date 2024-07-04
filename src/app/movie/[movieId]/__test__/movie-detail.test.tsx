import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import MovieDetailPage from '../page'

jest.mock('@/repositories/getMovieDetail', () => ({
  getMovieDetail: jest.fn().mockImplementationOnce(() => Promise.resolve({
    id: '',
    title: 'Inside Out 2',
    tagline: '',
    overview: '',
    backdrop_path: "",
    poster_path: '',
    release_date: '',
    production_companies: [],
    genres: [],
    keywords: [],
    runtime: '',
    recommendations: []
  })),
}));

describe('Movie Detail Page', () => {
  it('Shold render correcly', async () => {
    const MovieDetailPageResolved = await MovieDetailPage({ params: { movieId: '1022789' } });
    const { findByText } = render(MovieDetailPageResolved);
 
    const title = await findByText('Inside Out 2')
    expect(title).toBeInTheDocument();
  });
})
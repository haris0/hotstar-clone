import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import TvDetailPage from '../page'

jest.mock('@/repositories/getTvDetail', () => ({
  getTvDetail: jest.fn().mockImplementationOnce(() => Promise.resolve({
    id: '',
    name: 'Demon Slayer: Kimetsu no Yaiba',
    tagline: '',
    overview: '',
    backdrop_path: "",
    poster_path: '',
    first_air_date: '',
    seasons: [],
    production_companies: [],
    genres: [],
    keywords: [],
    runtime: '',
    recommendations: []
  })),
}));

describe('Tv Detail Page', () => {
  it('Shold render correcly', async () => {
    const TvDetailPageResolved = await TvDetailPage({ params: { tvId: '85937' } });
    const { findByText } = render(TvDetailPageResolved);
 
    const title = await findByText('Demon Slayer: Kimetsu no Yaiba')
    expect(title).toBeInTheDocument();
  });
})
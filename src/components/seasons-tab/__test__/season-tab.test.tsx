import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import SeasonsTabs from '..';
import { mockSeasons } from '../__mock__/seasons.mock';
import { mockEpisods } from '../__mock__/episods.mock';
import { useTvSeason } from "@/repositories/getTvSeason/useTvSeason";

const mockTvId = '85937';

jest.mock('@/repositories/getTvSeason/useTvSeason');

describe('Seasons tab Component', () => {
  (useTvSeason as jest.Mock).mockReturnValue({ data: { episodes: [] }})
  it('Shold render correcly', async () => {
    const { findAllByRole } = render(<SeasonsTabs tvId={mockTvId} seasons={mockSeasons} />);
 
    const tabButtons = await findAllByRole('button')
    expect(tabButtons.length).toBe(6);
  });

  it('Shold render episods of season 1', async () => {
    (useTvSeason as jest.Mock).mockReturnValue({ data: { episodes: mockEpisods }})
    const { findAllByRole } = render(<SeasonsTabs tvId={mockTvId} seasons={mockSeasons} />);
 
    const allEpisodsImages = await findAllByRole('img')
    expect(allEpisodsImages.length).toBe(26);
  });
})
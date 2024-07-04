import '@testing-library/jest-dom'
import { act, fireEvent, render } from '@testing-library/react'
import AccordionContent  from '..'
import WatchlistContextProvider from '@/context/WatchlistContext';
import { mockContens } from '../__mock__/contents.mock';
import { getFullPosterUrl } from '@/repositories/constants';

describe('Accordion Content Component', () => {
  it('Shold render correcly', async () => {
    const { findAllByRole } = render(
      <WatchlistContextProvider>
        <AccordionContent 
          contents={mockContens.map(movie => ({
            id: movie.id,
            title: movie.title,
            overview: movie.overview,
            imageUrl: getFullPosterUrl(movie.poster_path),
            mediaType: movie.media_type,
          }))} 
          initShow={15}
        />
      </WatchlistContextProvider>
    );
 
    const contents = await findAllByRole('img')
    expect(contents.length).toBe(15);
  });

  it('Shold render all contents', async () => {
    const { findAllByRole, findByText } = render(
      <WatchlistContextProvider>
        <AccordionContent 
          contents={mockContens.map(movie => ({
            id: movie.id,
            title: movie.title,
            overview: movie.overview,
            imageUrl: getFullPosterUrl(movie.poster_path),
            mediaType: movie.media_type,
          }))} 
          initShow={15}
        />
      </WatchlistContextProvider>
    );

    const showAllButton = await findByText('Show All');
    act(() => {
      fireEvent.click(showAllButton);
    })
 
    const contents = await findAllByRole('img')
    expect(contents.length).toBe(20);
  });
})
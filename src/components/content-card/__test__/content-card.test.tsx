import '@testing-library/jest-dom'
import { act, fireEvent, render } from '@testing-library/react'
import { mockContent } from '../__mock__/content.mock';
import ContentCard  from '..'
import WatchlistContextProvider from '@/context/WatchlistContext';

describe('Content Card Component', () => {
  it('Shold render correcly', async () => {
    const { findByText } = render(
      <WatchlistContextProvider>
        <ContentCard {...mockContent} />
      </WatchlistContextProvider>
    );
 
    const title = await findByText('Furiosa: A Mad Max Saga')
    expect(title).toBeInTheDocument();
  });

  it('Shold render hovered content', async () => {
    const { findByText } = render(
      <WatchlistContextProvider>
        <ContentCard {...mockContent} />
      </WatchlistContextProvider>
    );

    const title = await findByText('Furiosa: A Mad Max Saga');

    act(() => {
      fireEvent.mouseEnter(title);
    })

    const overview = await findByText('As the world fell, young Furiosa is snatched from the Green Place of Many Mothers and falls into the hands of a great Biker Horde led by the Warlord Dementus.');
    expect(overview).toBeInTheDocument();
  });
})
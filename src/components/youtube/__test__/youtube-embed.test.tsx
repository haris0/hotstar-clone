import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import YoutubeEmbed from '../YoutubeEmbed';

const mockEmpedId = 'LYV3001u574';

describe('Youtube Embeded Component', () => {
  it('Shold render correcly', async () => {
    const { findByTitle } = render(<YoutubeEmbed embedid={mockEmpedId} />);
 
    const iframe = await findByTitle('Embedded youtube')
    expect(iframe).toBeInTheDocument();
  });
})
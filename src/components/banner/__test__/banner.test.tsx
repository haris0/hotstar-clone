import { PropsWithChildren } from 'react';
import '@testing-library/jest-dom'
import { act, render } from '@testing-library/react'
import { mockContent } from '../__mock__/content.mock'
import Banner  from '..'

jest.mock("next/link", () => {
  return ({ children}: PropsWithChildren) => {
    return children;
  }
});

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

describe('Banner Component', () => {
  it('Shold render correcly', async () => {
    const { findByText } = render(<Banner movies={mockContent} />);
 
    const title = await findByText('Furiosa: A Mad Max Saga')
    expect(title).toBeInTheDocument();
  });

  it('Shold change banner after 10000 milisecond', async () => {
    jest.useFakeTimers();
    const { findByText } = render(<Banner movies={mockContent} />);

    const initTitle = await findByText('Furiosa: A Mad Max Saga')
    expect(initTitle).toBeInTheDocument();

    act(() => {
      jest.runOnlyPendingTimers();
    })

    const titleAfterTimer = await findByText('Inside Out 2')
    expect(titleAfterTimer).toBeInTheDocument();
  });
})
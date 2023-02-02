import React from 'react'
import { render, screen } from '@testing-library/react'
import Page from '../../pages/[id]'

describe('Page component', () => {
  it('renders the correct title and subtitle', () => {
    const page = {
      id: 1,
      attributes: {
        Heading: 'Title',
        Subtitle: 'Subtitle',
        Image: {
          data: {
            attributes: {
              url: 'image.jpg',
              alt: 'Image alt text',
            },
          },
        },
      },
    }

    render(<Page page={page} />)

    expect(screen.getByRole("heading", { name: page.attributes.Heading })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: page.attributes.Subtitle })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: page.attributes.Image.data.attributes.alt })).toBeInTheDocument();
  })

  // We could go further and mock with a mock server, but this is a good start.
})

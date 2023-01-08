import React from 'react'
import { Section } from '../../layout'

export const Favourites = () => {
  return (
    <Section icon="heart" title="My Favourite Things">
      <div className="mt-4 flex flex-col items-center justify-center gap-4">
        <a
          className="font-semibold hover:underline"
          href="https://ruffwear.com/"
          rel="noreferrer"
          target="_blank"
        >
          Ruffwear
        </a>

        <a
          className="font-semibold hover:underline"
          href="https://www.smallwonderspets.com/"
          rel="noreferrer"
          target="_blank"
        >
          Small Wonders Pets
        </a>

        <a
          className="font-semibold hover:underline"
          href="http://www.thebonehouse.ca/"
          rel="noreferrer"
          target="_blank"
        >
          The Bonehouse
        </a>

        <a
          className="font-semibold hover:underline"
          href="https://danicaolivaphotography.com/"
          rel="noreferrer"
          target="_blank"
        >
          Danica Oliva Photography
        </a>

        <a
          className="font-semibold hover:underline"
          href="https://www.whenhoundsfly.com/"
          rel="noreferrer"
          target="_blank"
        >
          When Hounds Fly
        </a>

        <a
          className="font-semibold hover:underline"
          href="https://www.doglogictoronto.ca/"
          rel="noreferrer"
          target="_blank"
        >
          DogLogic
        </a>
      </div>
    </Section>
  )
}

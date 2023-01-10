import React from 'react'
import { Section } from '../../layout'
import BoneHouse from '../../assets/bonehouse.png'
import DogLogic from '../../assets/doglogic.webp'
import Ruffwear from '../../assets/ruffwear.jpeg'
import WhenHoundsFly from '../../assets/whenhoundsfly.png'

interface Favourite {
  alt?: string
  logo?: string
  title: string
  url: string
}

const FAVOURITES: Favourite[] = [
  {
    logo: Ruffwear,
    title: 'Ruffwear',
    alt: 'Ruffwear logo',
    url: 'https://ruffwear.com/',
  },
  {
    title: 'Small Wonders Pets',
    url: 'https://www.smallwonderspets.com/',
  },
  {
    logo: BoneHouse,
    title: 'The Bone House',
    alt: 'Bone House logo',
    url: 'http://www.thebonehouse.ca/',
  },
  {
    logo: WhenHoundsFly,
    title: 'When Hounds Fly Dog Training',
    alt: 'When Hounds Fly crest',
    url: 'https://www.whenhoundsfly.com/',
  },
  {
    logo: DogLogic,
    title: 'Dog Logic',
    alt: 'Dog Logic logo',
    url: 'https://www.doglogictoronto.ca/',
  },
  {
    title: 'Danica Olivia Photography',
    url: 'https://danicaolivaphotography.com/',
  },
]

export const Favourites = () => {
  return (
    <Section icon="heart" title="My Favourite Things">
      <ul className="mt-4 flex flex-col items-center justify-center gap-4">
        {FAVOURITES.map(({ alt, logo, title, url }, i) => (
          <li key={i}>
            <a
              className="font-semibold hover:underline"
              href={url}
              rel="noreferrer"
              target="_blank"
            >
              {logo && alt ? (
                <div className="m-auto flex h-20 items-center justify-center">
                  <img
                    alt={alt}
                    className="margin-x-auto block h-[100%] w-auto max-w-[100%]"
                    src={logo}
                  />
                </div>
              ) : (
                title
              )}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}

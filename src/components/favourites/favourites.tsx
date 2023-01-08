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
      <div className="mt-4 flex flex-col items-center justify-center gap-4">
        {FAVOURITES.map((f, i) => (
          <a
            className="font-semibold hover:underline"
            href={f.url}
            key={i}
            rel="noreferrer"
            target="_blank"
          >
            {f.logo && f.alt ? (
              <div className="m-auto flex w-1/3 items-center justify-center">
                <img alt={f.alt} src={f.logo} />
              </div>
            ) : (
              f.title
            )}
          </a>
        ))}
      </div>
    </Section>
  )
}

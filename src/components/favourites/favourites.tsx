import React from 'react'
import { Section } from '../../layout'
import Ruffwear from '../../../public/assets/logos/ruffwear.jpeg'

const FAVOURITES = [
  {
    logo: Ruffwear,
    title: 'Ruffwear',
    alt: 'Ruffwear logo',
  },
] as const

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
          <img src={Ruffwear} />
          Ruffwear
        </a>

        {/* <a
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
          <img
            alt="The Bone House Logo"
            src="//images.squarespace-cdn.com/content/v1/56015b95e4b0efdfbbab1501/1443750047689-NKZF2OQYJT828UYY9CPQ/bonehouseheader1.png?format=1500w"
          />
          The Bonehouse
        </a>

        <a
          className="font-semibold hover:underline"
          href="https://www.whenhoundsfly.com/"
          rel="noreferrer"
          target="_blank"
        >
          <img src="https://www.whenhoundsfly.com/wp-content/uploads/2022/05/whenhoundsfly_crest_Black.png" />
          When Hounds Fly
        </a>

        <a
          className="font-semibold hover:underline"
          href="https://www.doglogictoronto.ca/"
          rel="noreferrer"
          target="_blank"
        >
          <img src="https://static.wixstatic.com/media/449a4e_d722476b229c46aa884da6199962c0d1~mv2.jpg/v1/fill/w_300,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/branding-06.jpg" />
          DogLogic
        </a> */}

        <a
          className="font-semibold hover:underline"
          href="https://danicaolivaphotography.com/"
          rel="noreferrer"
          target="_blank"
        >
          Danica Oliva Photography
        </a>
      </div>
    </Section>
  )
}

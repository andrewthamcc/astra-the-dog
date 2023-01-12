import React from 'react'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Section } from '../../layout'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

const PHOTOS = [
  {
    photo: 'bg-astra-one',
    caption: '☕️ at my favourite cafe',
  },
  {
    photo: 'bg-astra-two',
    caption: 'Ruffwear fit check',
  },
  {
    photo: 'bg-astra-three',
    caption: 'Train ride',
  },
  {
    photo: 'bg-astra-four',
    caption: `Halloween. I'm a dragon, RAWR!`,
  },
  {
    photo: 'bg-astra-five',
    caption: 'I have a hard life...',
  },
  {
    photo: 'bg-astra-six',
    caption: 'Fresh cut from The Bonehouse',
  },
] as const

export const Photos = () => {
  return (
    <Section icon="photo" title="It Me!">
      <Swiper modules={[Pagination]} pagination={{ clickable: true }}>
        {PHOTOS.map(({ photo, caption }, i) => (
          <SwiperSlide key={i}>
            <div
              className={`flex h-96 w-full flex-col items-center justify-end bg-cover bg-center bg-no-repeat pb-8 sm:h-[35rem] ${photo}`}
            >
              <p
                className="font-semi-bold text-lg text-white"
                style={{ textShadow: '1px 1px #000' }}
              >
                {caption}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  )
}

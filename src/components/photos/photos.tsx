import React from 'react'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Section } from '../../layout'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

const PHOTOS = [
  {
    photo: 'one.jpg',
    caption: '☕️ at my favourite cafe',
  },
  {
    photo: 'two.jpeg',
    caption: 'Ruffwear fit check',
  },
  {
    photo: 'three.jpg',
    caption: 'Train ride',
  },
  {
    photo: 'four.jpeg',
    caption: `Halloween. I'm a dragon, RAWR!`,
  },
  {
    photo: 'five.jpeg',
    caption: 'I have a hard life...',
  },
  {
    photo: 'six.jpg',
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
              className="flex h-96 w-full flex-col items-center justify-end bg-cover bg-center bg-no-repeat pb-8 sm:h-[35rem]"
              style={{ backgroundImage: `url('/assets/${photo}')` }}
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

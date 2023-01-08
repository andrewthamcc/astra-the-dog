import React from 'react'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Section } from '../../layout'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

const PHOTOS = [
  {
    photo: 'one',
    caption: '☕️ at my favourite cafe',
  },
  {
    photo: 'two',
    caption: 'Ruffwear fit check',
  },
  {
    photo: 'three',
    caption: 'Train ride',
  },
  {
    photo: 'four',
    caption: `Halloween. I'm a dragon, RAWR!`,
  },
  {
    photo: 'five',
    caption: 'I have a hard life...',
  },
  {
    photo: 'six',
    caption: 'Fresh cut from The Bonehouse',
  },
] as const

export const Photos = () => {
  return (
    <Section icon="photo" title="It Me!">
      <Swiper modules={[Pagination]} pagination={{ clickable: true }}>
        {PHOTOS.map(({ photo, caption }, i) => {
          const bg = `bg-astra-${photo} `

          return (
            <SwiperSlide key={i}>
              <div
                className={
                  bg +
                  `flex h-96 w-full flex-col items-center justify-end bg-cover bg-center bg-no-repeat pb-8 sm:h-[35rem] `
                }
              >
                <p
                  className="font-semi-bold text-lg text-white"
                  style={{ textShadow: '1px 1px #000' }}
                >
                  {caption}
                </p>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Section>
  )
}

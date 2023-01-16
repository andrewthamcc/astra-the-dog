import React from 'react'
import { Icon } from '..'

export const Hero = () => {
  return (
    <section>
      <div className="my-6 font-noto">
        <div className="flex items-center gap-4">
          <h1 className="text-6xl font-semibold text-astra-blue">
            Astra the Dog
          </h1>
          <div className="mt-6 flex justify-center">
            <div className="-rotate-12">
              <Icon color="pink" icon="paw" />
            </div>
            <div className="mt-4 rotate-20">
              <Icon color="teal" icon="paw" />
            </div>
          </div>
        </div>
        <h2 className="text-xl">paw-sonal website</h2>
      </div>
      <div className="h-96 rounded-md bg-astra-hero bg-cover bg-center bg-no-repeat" />
      <div className="mt-10 mb-10 text-center">
        <p className="text-2xl">Spunk, fluff, sass and full of class!</p>
        <p className="text-sm">Toronto, Canada</p>
      </div>
    </section>
  )
}

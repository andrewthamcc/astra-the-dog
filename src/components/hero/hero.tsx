import React from 'react'
import { Icon } from '..'

export const Hero = () => {
  return (
    <>
      <div className="my-6 font-noto">
        <h1 className="text-6xl">Astra the Dog</h1>
        <h2 className="text-xl">paw-sonal website</h2>
      </div>
      <div className="h-96 rounded-md bg-astra-hero bg-cover bg-center bg-no-repeat drop-shadow-sm" />
      <div className="mt-20 mb-10 text-center">
        <div className="flex justify-center">
          <div className="mb-6 -rotate-12">
            <Icon color="pink" icon="paw" />
          </div>
          <div className="mt-4 rotate-20">
            <Icon color="teal" icon="paw" />
          </div>
        </div>
        <p>Spunk, fluff, sass and full of class!</p>
        <p className="text-sm">Mini Goldendoodle</p>
        <p className="text-xs">Toronto, Canada</p>
      </div>
    </>
  )
}

import React from 'react'
import { Icon } from '../../components'

export const Hero = () => {
  React.useEffect(() => {
    console.log(`
    ,-.___,-.
    \\_/_ _\\_/
      )O_O(
     { (_) }
      '-^-' `)
    console.log(`Astra's Paw-sonal Website`)
  }, [])

  return (
    <>
      <div className="m-auto w-4/5 pt-20">
        <h1 className="mb-6 py-2 font-noto text-4xl">Astra the Dog</h1>
        <div className="h-96 rounded-md bg-astra-hero bg-cover bg-center bg-no-repeat drop-shadow-sm" />
      </div>
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

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
        <h1 className="py-2 font-noto text-xl">Astra the Dog</h1>
        <div className="h-96 rounded-md bg-astra-hero bg-cover bg-center bg-no-repeat drop-shadow-sm" />
      </div>
      <div className="mt-20 text-center">
        <div className="flex justify-center">
          <Icon icon="paw" />
        </div>
        <p>Spunk, fluff, sass and full of class!</p>
        <p>Mini Goldendoodle</p>
        <p>Toronto, Canada</p>
        <a href="http://embk.me/astra78" rel="noreferrer" target="_blank">
          Embark
        </a>
      </div>
    </>
  )
}

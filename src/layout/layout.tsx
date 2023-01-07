import React from 'react'
import { Footer } from './footer'
import { Hero } from './hero'

export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="flex flex-col">
      <Hero />
      <main className="m-auto flex h-full w-4/5 flex-1 flex-col py-8">
        {children}
      </main>
      <Footer />
    </div>
  )
}

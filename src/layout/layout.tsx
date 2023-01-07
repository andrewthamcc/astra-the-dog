import React from 'react'
import { Footer } from './footer'

export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <div className="flex flex-col">
        <main className="m-auto flex h-full w-4/5 flex-1 flex-col">
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}

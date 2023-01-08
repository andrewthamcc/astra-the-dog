import React from 'react'
import { Icon, IconVariants } from '../../components'

interface SectionProps extends React.PropsWithChildren {
  icon: IconVariants
  title: string
}

export const Section = ({ children, icon, title }: SectionProps) => {
  return (
    <section className="m-auto my-8 w-1/2 flex-col items-center justify-center rounded-lg border-2 border-gray-100 bg-white px-4 py-6 text-center drop-shadow-xl">
      <div className="my-2 inline-block rounded-full border-2 border-black p-1">
        <Icon color="pink" icon={icon} />
      </div>
      <h3 className="mb-4 text-2xl">{title}</h3>
      {children}
    </section>
  )
}

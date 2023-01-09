import React from 'react'
import { Icon, IconVariants } from '../../components'

interface SectionProps extends React.PropsWithChildren {
  icon: IconVariants
  title: string
}

export const Section = ({ children, icon, title }: SectionProps) => {
  return (
    <section className="mx-auto my-4 w-full flex-col items-center justify-center rounded-lg border-2 border-gray-100 bg-white px-4 py-6 text-center drop-shadow-xl sm:my-8 sm:w-4/5 md:w-1/2">
      <div className="my-3 inline-block rounded-full border-2 border-astra-blue p-2">
        <Icon color="pink" icon={icon} />
      </div>
      <h3 className="mb-4 font-noto text-2xl font-bold text-astra-blue">
        {title}
      </h3>
      {children}
    </section>
  )
}

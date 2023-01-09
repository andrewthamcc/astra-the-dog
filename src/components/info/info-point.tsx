import React from 'react'
import { Icon, IconVariants } from '../icon'

type InfoPointProps =
  | {
      href: string
      icon: Extract<IconVariants, 'email' | 'dna' | 'hospital'>
      link: string
      value?: never
    }
  | {
      href?: never
      icon: Exclude<IconVariants, 'email' | 'dna' | 'hospital'>
      link?: never
      value: string | React.ReactElement
    }

export const InfoPoint = ({ link, href, icon, value }: InfoPointProps) => {
  return (
    <div className="grid grid-cols-2 items-center">
      <Icon color="blue" icon={icon} />
      {link && href ? (
        <a
          className="font-semibold hover:underline"
          href={href}
          rel="noreferrer"
          target="_blank"
        >
          {link}
        </a>
      ) : (
        <p className="text-left">{value}</p>
      )}
    </div>
  )
}

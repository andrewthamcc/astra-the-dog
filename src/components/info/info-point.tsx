import React from 'react'
import { Icon, IconVariants } from '../icon'

type InfoPointProps =
  | {
      href: string
      icon: Extract<IconVariants, 'email' | 'dna'>
      link: string
      value?: never
    }
  | {
      href?: never
      icon: Exclude<IconVariants, 'email' | 'dna'>
      link?: never
      value: string
    }

export const InfoPoint = ({ link, href, icon, value }: InfoPointProps) => {
  return (
    <div className="flex justify-center gap-x-4">
      <Icon color="blue" icon={icon} />
      {link && href ? (
        <a
          className="hover:underline"
          href={href}
          rel="noreferrer"
          target="_blank"
        >
          {link}
        </a>
      ) : (
        <div className="flex items-center justify-center">
          <p className="m-auto">{value}</p>
        </div>
      )}
    </div>
  )
}

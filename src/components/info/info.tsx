import React from 'react'
import { Icon, IconVariants } from '../icon'

export const Info = () => {
  return (
    <div className="m-auto grid w-4/5 grid-cols-2 grid-rows-4 gap-x-4 gap-y-2">
      <InfoPoint
        icon="cake"
        value={new Date('2021/10/15').toLocaleDateString()}
      />
      <InfoPoint icon="license" value="D21-357862" />
      <InfoPoint icon="color" value="Cream" />
      <InfoPoint
        href="https://embarkvet.com/dog/astra78"
        icon="dna"
        link="Embark"
      />
      <InfoPoint icon="height" value="38cm" />
      <InfoPoint icon="vaccine" value="13120579" />
      <InfoPoint icon="weight" value="7.5kg" />
      <InfoPoint icon="hospital" value="Bluecross Animal Hospital" />
    </div>
  )
}

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

const InfoPoint = ({ link, href, icon, value }: InfoPointProps) => {
  return (
    <div className="flex justify-center gap-x-4">
      <Icon icon={icon} />
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
        <div className="flex justify-center align-middle">
          <p className="m-auto">{value}</p>
        </div>
      )}
    </div>
  )
}

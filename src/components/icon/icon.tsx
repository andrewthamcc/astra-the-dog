import React from 'react'
import { Icon as Iconify, IconifyIcon } from '@iconify/react'
import atIcon from '@iconify/icons-mdi/at'
import cakeVariantOutline from '@iconify/icons-mdi/cake-variant-outline'
import cameraIcon from '@iconify/icons-mdi/camera'
import cardsHeart from '@iconify/icons-mdi/cards-heart'
import dnaIcon from '@iconify/icons-mdi/dna'
import dogIcon from '@iconify/icons-mdi/dog'
import dogSide from '@iconify/icons-mdi/dog-side'
import driversLicenseOutline from '@iconify/icons-mdi/drivers-license-outline'
import genderFemale from '@iconify/icons-mdi/gender-female'
import hospitalBoxOutline from '@iconify/icons-mdi/hospital-box-outline'
import mapMarker from '@iconify/icons-mdi/map-marker'
import needleIcon from '@iconify/icons-mdi/needle'
import paletteOutline from '@iconify/icons-mdi/palette-outline'
import pawIcon from '@iconify/icons-mdi/paw'
import phoneIcon from '@iconify/icons-mdi/phone'
import rulerIcon from '@iconify/icons-mdi/ruler'
import weightKilogram from '@iconify/icons-mdi/weight-kilogram'

export const ICON_TYPES = [
  'cake',
  'color',
  'dna',
  'dog',
  'dogSide',
  'email',
  'gender',
  'heart',
  'height',
  'hospital',
  'license',
  'location',
  'paw',
  'phone',
  'photo',
  'weight',
  'vaccine',
] as const
export type IconVariants = typeof ICON_TYPES[number]

const iconVariants: Record<IconVariants, IconifyIcon> = {
  cake: cakeVariantOutline,
  color: paletteOutline,
  dna: dnaIcon,
  dog: dogIcon,
  dogSide: dogSide,
  email: atIcon,
  gender: genderFemale,
  heart: cardsHeart,
  height: rulerIcon,
  hospital: hospitalBoxOutline,
  license: driversLicenseOutline,
  location: mapMarker,
  paw: pawIcon,
  phone: phoneIcon,
  photo: cameraIcon,
  weight: weightKilogram,
  vaccine: needleIcon,
}

type ColorVariants = 'pink' | 'teal' | 'blue' | 'black' | 'gray'
const colors: Record<ColorVariants, string> = {
  black: 'black',
  blue: '#1D3557',
  gray: '#B5B5B5',
  pink: '#D32B79',
  teal: '#49BEDF',
}

interface IconProps {
  className?: string
  color?: ColorVariants
  icon: IconVariants
}

export const Icon = ({ className, color = 'black', icon }: IconProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-center text-4xl ${className}`}
    >
      <Iconify icon={iconVariants[icon]} style={{ color: colors[color] }} />
    </div>
  )
}

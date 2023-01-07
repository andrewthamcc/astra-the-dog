import React from 'react'
import { Icon as Iconify, IconifyIcon } from '@iconify/react'
import atIcon from '@iconify/icons-mdi/at'
import cakeVariantOutline from '@iconify/icons-mdi/cake-variant-outline'
import dnaIcon from '@iconify/icons-mdi/dna'
import driversLicenseOutline from '@iconify/icons-mdi/drivers-license-outline'
import hospitalBoxOutline from '@iconify/icons-mdi/hospital-box-outline'
import mapMarker from '@iconify/icons-mdi/map-marker'
import needleIcon from '@iconify/icons-mdi/needle'
import paletteOutline from '@iconify/icons-mdi/palette-outline'
import pawIcon from '@iconify/icons-mdi/paw'
import rulerIcon from '@iconify/icons-mdi/ruler'
import weightKilogram from '@iconify/icons-mdi/weight-kilogram'

export const ICON_TYPES = [
  'cake',
  'color',
  'dna',
  'email',
  'height',
  'hospital',
  'license',
  'location',
  'paw',
  'weight',
  'vaccine',
] as const
export type IconVariants = typeof ICON_TYPES[number]

const iconVariants: Record<IconVariants, IconifyIcon> = {
  cake: cakeVariantOutline,
  color: paletteOutline,
  dna: dnaIcon,
  email: atIcon,
  height: rulerIcon,
  hospital: hospitalBoxOutline,
  license: driversLicenseOutline,
  location: mapMarker,
  paw: pawIcon,
  weight: weightKilogram,
  vaccine: needleIcon,
}

interface IconProps {
  icon: IconVariants
}

export const Icon = ({ icon }: IconProps) => {
  return (
    <div className="flex flex-col justify-center align-middle text-4xl">
      <Iconify icon={iconVariants[icon]} />
    </div>
  )
}

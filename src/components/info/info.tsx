import React, { useState } from 'react'
import { Icon } from '../icon'
import { VaccineModal } from '../vaccine-modal'
import { InfoPoint } from './info-point'

export const Info = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Icon className="my-2 text-6xl" color="blue" icon="dog" />
      <div className="m-auto grid w-4/5 grid-cols-2 grid-rows-4 gap-x-4 gap-y-2 pt-6 pb-8">
        <InfoPoint
          icon="cake"
          value={new Date('2021/10/15').toLocaleDateString()}
        />
        <InfoPoint icon="license" value="D21-357862" />
        <InfoPoint icon="color" value="Cream" />
        <button
          aria-label="view vaccine info"
          className="hover:underline"
          onClick={() => setIsModalOpen(true)}
        >
          <InfoPoint icon="vaccine" value="13120579" />
        </button>
        <InfoPoint icon="height" value="38cm" />
        <InfoPoint
          href="https://embarkvet.com/dog/astra78"
          icon="dna"
          link="Embark"
        />
        <InfoPoint icon="weight" value="7.5kg" />
        <InfoPoint icon="hospital" value="Bluecross Animal Hospital" />
      </div>

      <VaccineModal onClose={() => setIsModalOpen(false)} open={isModalOpen} />
    </>
  )
}

import React, { useState } from 'react'
import { Section } from '../../layout'
import { VaccineModal } from '../vaccine'
import { InfoPoint } from './info-point'

export const Info = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <Section icon="dog" title="Who am I?">
      <div className="flex flex-col gap-2 text-left">
        <InfoPoint icon="dogSide" value="Mini Goldendoodle" />
        <InfoPoint icon="gender" value="Female" />
        <InfoPoint
          icon="cake"
          value={new Date('2021/10/15').toLocaleDateString()}
        />
        <InfoPoint icon="color" value="Cream" />
        <InfoPoint icon="height" value="38cm" />
        <InfoPoint icon="weight" value="7.5kg" />
        <InfoPoint icon="license" value="D21-357862" />
        <InfoPoint
          icon="vaccine"
          value={
            <button
              aria-label="view vaccine info"
              className="m-auto font-semibold hover:underline"
              onClick={() => setIsModalOpen(true)}
            >
              13120579
            </button>
          }
        />
        <InfoPoint
          href="https://www.bluecrossanimalhospital.ca/"
          icon="hospital"
          link="Bluecross Animal Hospital"
        />
        <InfoPoint
          href="https://embarkvet.com/dog/astra78"
          icon="dna"
          link="Embark"
        />
      </div>

      <VaccineModal onClose={() => setIsModalOpen(false)} open={isModalOpen} />
    </Section>
  )
}

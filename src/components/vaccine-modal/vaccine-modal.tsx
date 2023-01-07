import React from 'react'
import { Modal } from '../modal'
import { Icon } from '../icon'

interface VaccineProps {
  onClose: () => void
  open: boolean
}

export const RABIES_VACCINE = {
  tag: 13120579,
  date: '2022/03/24',
  producer: 'Merial',
  expiry: '2023/02/10',
  lot: 18511,
  type: 'Killed Virus',
  renewalDate: '2023/03/24',
  vet: `Ciara O'Meara DVM`,
} as const

export const VaccineModal = ({ onClose, open }: VaccineProps) => {
  return (
    <Modal label="rabies vaccine info" onClose={onClose} open={open}>
      <div className="p-4 text-center">
        <div className="mb-2 flex items-center justify-center">
          <Icon icon="vaccine" />
          <h2 className="flex flex-col items-center justify-center text-xl">
            Rabies Vaccine
          </h2>
        </div>

        <div className="flex flex-col justify-center gap-4 text-sm">
          <div>
            <p>Producer: {RABIES_VACCINE.producer}</p>
            <p>Type: {RABIES_VACCINE.type}</p>
          </div>

          <div>
            <p>Serial/Lot #: {RABIES_VACCINE.lot}</p>
            <p>Lot Exp: {RABIES_VACCINE.expiry}</p>
          </div>

          <div>
            <p>Tag #: {RABIES_VACCINE.tag}</p>
            <p>Date: {new Date(RABIES_VACCINE.date).toLocaleDateString()}</p>
          </div>

          <div className="font-bold">
            <p>{RABIES_VACCINE.vet}</p>
          </div>
        </div>
      </div>
    </Modal>
  )
}

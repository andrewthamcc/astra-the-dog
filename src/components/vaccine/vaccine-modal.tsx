import React from 'react'
import ReactModal from 'react-modal'
import { Icon } from '../icon'

interface VaccineProps {
  onClose: () => void
  open: boolean
}

export const RABIES_VACCINE = {
  Producer: 'Merial',
  Type: 'Killed Virus',
  'Serial/Lot #': 18511,
  'Lot Exp': '2023/02/10',
  'Tag #': 13120579,
  Date: '2022/03/24',
  Vet: `Ciara O'Meara DVM`,
} as const

ReactModal.setAppElement(document.getElementById('root') as HTMLElement)

const MODAL_STYLE = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '0.325rem',
  },
}

export const VaccineModal = ({ onClose, open }: VaccineProps) => {
  return (
    <ReactModal
      contentLabel="rabies vaccine info"
      isOpen={open}
      onRequestClose={onClose}
      style={MODAL_STYLE}
    >
      <div className="p-4 text-center">
        <div className="mb-2 flex items-center justify-center">
          <Icon icon="vaccine" />
          <h2 className="flex flex-col items-center justify-center text-xl">
            Rabies Vaccine
          </h2>
        </div>

        <div>
          <ul className="mb-4 flex flex-col justify-center gap-4 text-sm">
            {Object.keys(RABIES_VACCINE).map((key, i) => (
              <li key={i}>
                <span className="font-medium">{key}:</span>{' '}
                {RABIES_VACCINE[key as keyof typeof RABIES_VACCINE]}
              </li>
            ))}
          </ul>
          <button
            className="rounded-md border-2 border-astra-gray bg-astra-blue px-4 py-2 text-white"
            onClick={onClose}
            type="button"
          >
            Close
          </button>
        </div>
      </div>
    </ReactModal>
  )
}

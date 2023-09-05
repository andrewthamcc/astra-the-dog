import { useState } from 'react'
import ReactModal from 'react-modal'

const RABIES_VACCINE = {
  Producer: 'Boehringer-Ingelheim',
  Type: 'Killed Virus',
  'Serial/Lot #': 18551,
  'Lot Exp': '2024/05/19',
  'Tag #': 14723806,
  Date: '2023/03/09',
  DHPP: '2022/12/28',
  Vet: `Michael Ellison, DVM`,
} as const

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

export default function Vaccine() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => setIsOpen(false)

  return (
    <>
      <ReactModal
        contentLabel="vaccine info"
        isOpen={isOpen}
        onRequestClose={handleClose}
        style={MODAL_STYLE}
      >
        <div className="p-4 text-center">
          <div className="mb-2 flex items-center justify-center">
            <h2 className="flex flex-col items-center justify-center text-xl text-astra-blue">
              Rabies Vaccine
            </h2>
          </div>

          <div>
            <ul className="mb-4 flex flex-col justify-center gap-4 text-sm">
              {Object.keys(RABIES_VACCINE).map((key, i) => (
                <li key={i}>
                  <span>{key}:</span>{' '}
                  {RABIES_VACCINE[key as keyof typeof RABIES_VACCINE]}
                </li>
              ))}
            </ul>
            <button
              className="rounded-md border-2 bg-astra-blue px-4 py-2 text-white"
              onClick={handleClose}
              type="button"
            >
              Close
            </button>
          </div>
        </div>
      </ReactModal>

      <button
        className="inline-block text-left font-semibold text-astra-blue hover:underline"
        onClick={() => setIsOpen(true)}
      >
        13120579
      </button>
    </>
  )
}

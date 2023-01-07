import React from 'react'
import ReactModal from 'react-modal'

interface ReactModalProps extends React.PropsWithChildren {
  label: string
  onClose: () => void
  open: boolean
}

ReactModal.setAppElement(document.getElementById('root') as HTMLElement)

export const Modal = ({ label, onClose, open, children }: ReactModalProps) => {
  return (
    <ReactModal
      contentLabel={label}
      isOpen={open}
      onRequestClose={onClose}
      style={{
        overlay: {
          backgroundColor: 'rgba(0,0,0,0.6)',
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
      }}
    >
      {children}
    </ReactModal>
  )
}

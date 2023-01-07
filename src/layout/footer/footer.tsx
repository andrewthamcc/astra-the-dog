import React from 'react'

export const Footer = () => {
  return (
    <footer className="align-center m-auto flex w-4/5 justify-between py-2 text-xs">
      <p>© {new Date().getFullYear()} Astra the Dog</p>
      <p>
        by{' '}
        <a
          className="hover:underline"
          href="https://github.com/andrewthamcc"
          rel="noopener noreferrer"
          target="_blank"
        >
          Andrew Tham
        </a>
      </p>
    </footer>
  )
}

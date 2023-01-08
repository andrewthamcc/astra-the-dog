import React, { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Section } from '../../layout'
import { Icon } from '../icon'

export const Location = () => {
  const [qrScanned, setQrScanned] = useState(false)
  const [coords, setCoords] = useState<
    { lat: number; long: number } | undefined
  >(undefined)
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  )

  useEffect(() => {
    const isQRScanned = document.location.search.includes('qr')
    setQrScanned(isQRScanned)
  }, [])

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude
          const long = position.coords.longitude

          setCoords({ lat, long })
        },
        (error) => {
          let message = 'error'
          switch (error.code) {
            case error.PERMISSION_DENIED:
              message = 'Permission Denied.'
              break
            case error.POSITION_UNAVAILABLE:
              message = 'Location unavailable.'
              break
            case error.TIMEOUT:
              message = 'Location request timed out.'
              break
            default:
              message = 'An unknown error occurred.'
              break
          }
          setErrorMessage(message)
        }
      )
    }
  }

  const emailSubject = `Astra's Location`
  const emailBody = `Find me here! latitude: ${coords?.lat} longitude: ${coords?.long}`

  return (
    <Section icon="location" title="Where am I?">
      {!coords && (
        <>
          <button
            className="my-2 rounded-md border-2 border-astra-gray bg-astra-blue px-4 py-2 text-white"
            onClick={handleGetLocation}
            type="button"
          >
            Locate Me!
          </button>
          {!qrScanned && (
            <p className="text-xs italic">
              Oops! You didn&apos;t arrive by scanning my collar.
            </p>
          )}
          <p className="text-xs italic">
            {qrScanned ? `I'll ask you for permission!` : `This will find you!`}
          </p>
        </>
      )}

      {errorMessage && (
        <p className="text-bold decoration-red">{errorMessage}</p>
      )}
      {coords && (
        <div className="m-auto my-4">
          <MapContainer
            center={[coords.lat, coords.long]}
            scrollWheelZoom={false}
            zoom={16}
          >
            <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
            <Marker position={[coords.lat, coords.long]}>
              <Popup>
                <Icon color="pink" icon="dog" />
              </Popup>
            </Marker>
          </MapContainer>
          {qrScanned ? (
            <div>
              <p>Email my location or call my paw-rents</p>
              <div className="flex flex-col items-center justify-center gap-2">
                <a
                  className="flex cursor-pointer gap-1 font-semibold hover:underline"
                  href={`mailto:hello@astrathedog.cc?subject=${emailSubject}&body=${emailBody}`}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Icon className="text-lg" color="blue" icon="email" />
                  hello@astrathedog.com
                </a>

                <a
                  className="flex cursor-pointer gap-1 font-semibold hover:underline"
                  href={`tel:${import.meta.env.VITE_TELEPHONE}`}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Icon className="text-lg" color="blue" icon="phone" />
                  Dad
                </a>
              </div>
            </div>
          ) : (
            <button
              className="mt-2 rounded-md border-2 border-astra-gray bg-astra-blue px-4 py-2 text-white"
              onClick={() => setCoords(undefined)}
              type="button"
            >
              Close
            </button>
          )}
        </div>
      )}
    </Section>
  )
}

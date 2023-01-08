import React, { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Section } from '../../layout'
import { Icon } from '../icon'

export const Location = () => {
  const [qrScanned, setQrScanned] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
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
    setIsLoading(true)

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude
          const long = position.coords.longitude

          setCoords({ lat, long })
          setIsLoading(false)
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
          setIsLoading(false)
        }
      )
    }
  }

  const emailSubject = `Astra's Location`
  const emailBody = `Find me here! latitude: ${coords?.lat} longitude: ${coords?.long}`

  return (
    <Section icon="location" title="Where am I?">
      {!coords && !isLoading && (
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
      {!coords && isLoading && (
        <div role="status">
          <svg
            aria-hidden="true"
            className="m-auto h-8 w-8 animate-spin fill-astra-pink text-gray-200 dark:text-gray-600"
            fill="none"
            viewBox="0 0 100 101"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
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

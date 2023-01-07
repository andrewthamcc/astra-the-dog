import React, { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
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

  const title = qrScanned
    ? !coords
      ? 'Where am I?'
      : 'Here I Am!'
    : 'Where are you?'
  const emailSubject = `Astra's Location`
  const emailBody = `Find me here! latitude: ${coords?.lat} longitude: ${coords?.long}`

  return (
    <div className="flex flex-col items-center justify-center py-8 text-center">
      <h3 className="text-2xl">{title}</h3>

      {!coords && (
        <button className="my-4" onClick={handleGetLocation}>
          <Icon className="my-2" color="blue" icon="location" />
          <p className="">
            {qrScanned ? 'Get my location' : 'Locate yourself!'}
          </p>
          <p className="text-xs italic">
            {qrScanned
              ? `I'll ask you for permission!`
              : `You didn't scan my collar`}
          </p>
        </button>
      )}

      <div className="p-4 text-center">
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
              <a
                className="cursor-pointer hover:underline"
                href={`mailto:hello@astrathedog.cc?subject=${emailSubject}&body=${emailBody}`}
                rel="noreferrer"
                target="_blank"
              >
                Share my location to my Paw-rents
              </a>
            ) : (
              <p>There you are!</p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

import React, { useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Icon } from '../icon'

export const Location = () => {
  const [coords, setCoords] = useState<
    { lat: number; long: number } | undefined
  >(undefined)
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  )

  const getError = (error: GeolocationPositionError) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        return 'Permission Denied.'
      case error.POSITION_UNAVAILABLE:
        return 'Location unavailable.'
      case error.TIMEOUT:
        return 'Location request timed out.'
      default:
        return 'An unknown error occurred.'
    }
  }

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude
          const long = position.coords.longitude

          setCoords({ lat, long })
        },
        (error) => {
          const errMessage = getError(error)
          setErrorMessage(errMessage)
        }
      )
    }
  }

  const emailSubject = `Astra's Location`
  const emailBody = `Find me here! latitude: ${coords?.lat} longitude: ${coords?.long}`

  return (
    <div className="flex flex-col items-center justify-center py-8 text-center">
      <h3 className="text-2xl">{!coords ? 'Where am I?' : 'Here I am!'}</h3>

      {!coords && (
        <button className="my-4" onClick={handleGetLocation}>
          <Icon className="my-2" color="blue" icon="location" />
          <p className="">get my location</p>
          <p className="text-xs italic">
            &quot;I&apos;ll ask you for permission!&quot;
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

            <a
              className="cursor-pointer hover:underline"
              href={`mailto:hello@astrathedog.cc?subject=${emailSubject}&body=${emailBody}`}
              rel="noreferrer"
              target="_blank"
            >
              Share my location to my Paw-rents
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

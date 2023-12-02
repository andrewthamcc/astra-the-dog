import { useEffect, useState } from 'react'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import { useGetLocation } from '../hooks/useGetLocation'

export default function Location() {
  const [getLocationData, { data, loading, error }] = useGetLocation()
  const [isQRScanned, setIsQRScanned] = useState(false)

  useEffect(() => {
    setIsQRScanned(document.location.search.includes(import.meta.env.PUBLIC_QR))
  }, [])

  if (loading) {
    return (
      <div role="status">
        <svg
          aria-hidden="true"
          className="text-gray-200 dark:text-gray-600 m-auto h-8 w-8 animate-spin fill-astra-pink"
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
    )
  }

  if (error) {
    return (
      <>
        <p className="text-bold decoration-red">{error}</p>

        <button
          className="my-2 rounded-md border-2 bg-astra-blue px-4 py-2 text-white"
          onClick={getLocationData}
          type="button"
        >
          Try Again?
        </button>
      </>
    )
  }

  if (data) {
    const { lat, long } = data
    const emailSubject = `Astra's Location`
    const emailBody = `Find me here! 
    latitude: ${lat} longitude: ${long}
    https://maps.google.com/?q=${lat},${long}`

    return (
      <div className="m-auto my-4">
        <MapContainer
          center={[lat, long]}
          scrollWheelZoom={false}
          zoom={16}
          className="h-60"
        >
          <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
          <Marker position={[lat, long]} />
        </MapContainer>
        {isQRScanned && (
          <p className="mt-4">
            <a
              className="inline font-semibold hover:underline"
              href={`mailto:hello@astrathedog.com?subject=${emailSubject}&body=${emailBody}`}
              target="_blank"
            >
              email
            </a>{' '}
            my location or{' '}
            <a
              className="inline font-semibold hover:underline"
              href={`tel:${import.meta.env.PUBLIC_TELEPHONE}`}
              target="_blank"
            >
              call
            </a>{' '}
            my paw-rents
          </p>
        )}
      </div>
    )
  }

  return (
    <>
      <button
        className="my-2 rounded-md border-2 bg-astra-blue px-4 py-2 text-white"
        onClick={getLocationData}
        type="button"
      >
        Locate Me!
      </button>
      {!isQRScanned && (
        <p className="text-xs italic">
          Oops! You didn&apos;t arrive by scanning my collar.
        </p>
      )}
      <p className="text-xs italic">
        {isQRScanned ? `I'll ask you for permission!` : `This will find you!`}
      </p>
    </>
  )
}

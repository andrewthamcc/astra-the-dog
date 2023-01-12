import { useState } from 'react'

type LocationType = { lat: number; long: number } | undefined

interface LocationData {
  data: LocationType
  loading: boolean
  error: string | undefined
}

export const useGetLocation = (): [() => void, LocationData] => {
  const [loading, setLoading] = useState(false)
  const [locationData, setLocationData] = useState<LocationType>(undefined)
  const [error, setError] = useState<string | undefined>(undefined)

  const handleError = (error: GeolocationPositionError) => {
    console.error(error)
    let message: string | undefined
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

    setError(message)
    setLoading(false)
  }

  const handleLocation = (position: GeolocationPosition) => {
    const lat = position.coords.latitude
    const long = position.coords.longitude

    setLocationData({ lat, long })
    setLoading(false)
  }

  const getLocationData = () => {
    if (navigator.geolocation) {
      setLoading(true)
      navigator.geolocation.getCurrentPosition(handleLocation, handleError)
    }
  }

  return [getLocationData, { data: locationData, loading, error }]
}

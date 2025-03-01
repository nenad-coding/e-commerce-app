'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

export default function MapComponent({ x_position, y_position }) {
  const position = [parseFloat(x_position), parseFloat(y_position)]

  const customIcon = new L.Icon({
    iconUrl:
      'data:image/svg+xml;charset=utf-8,' +
      encodeURIComponent(`
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="%23ff4d4d" d="M12 2C8.13 2 5 5.13 5 9c0 4.42 4.4 9.98 6.23 12.12a1.5 1.5 0 0 0 2.28 0C14.6 18.98 19 13.42 19 9c0-3.87-3.13-7-7-7zm0 10.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z"/>
      </svg>
    `),
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  })

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: '400px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position} icon={customIcon}>
        <Popup>Location: Kilcoole</Popup>
      </Marker>
    </MapContainer>
  )
}

import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import "./App.css"
import icon from "./img/téléchargement-removebg-preview.png"
import l from "leaflet"
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js"
import LeafletGeocoder from './LeafletGeocoder'

const App = () => {
  const position = [36.8065, 10.1815]
  return (
    <div>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LeafletGeocoder />
      </MapContainer>
    </div>
  )
}
let DefaultIcon = l.icon({
  iconUrl: icon,
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40]
})
l.Marker.prototype.options.icon = DefaultIcon;

export default App
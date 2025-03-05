import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Required CSS for Leaflet

const Map = () => {

  const position = [9.0348, 38.7616];

  return (
   <div className="overflow-x-hidden">
     <MapContainer
      center={position}
      zoom={14}
      scrollWheelZoom={false} // Disable zooming with scroll wheel
      style={{ width: "100vw", height: "60vh" }} 
      className="overflow-x-hidden"
    >
      {/* TileLayer: You can use OpenStreetMap or any other tile provider */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Marker: Placing the marker at Bole */}
      <Marker position={position}>
        <Popup>Office Location: Bole, Addis Ababa</Popup>
      </Marker>
    </MapContainer>
   </div>
  );
};

export default Map;

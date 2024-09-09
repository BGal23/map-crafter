import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// Styl dla kontenera mapy (ustawiasz wysokość, ponieważ domyślnie element może być niewidoczny)
const mapContainerStyle = {
  height: "100vh",
  width: "100vw",
};

// Ustawienia początkowe mapy
const center = {
  lat: 52.2297, // Szerokość geograficzna Warszawy
  lng: 21.0122, // Długość geograficzna Warszawy
};

const App: React.FC = () => {
  return (
    // Komponent LoadScript zapewnia załadowanie skryptu Google Maps API
    <LoadScript googleMapsApiKey="AIzaSyBL7C2LRxclklMp9It5Ghb0vEYYO56L8AU">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10} // Poziom zbliżenia
      >
        {/* Dodanie markera */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default App;

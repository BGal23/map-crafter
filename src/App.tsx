import { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  height: "100vh",
  width: "100vw",
};

const defaultCenter = {
  lat: 52.2297,
  lng: 21.0122,
};

const App = () => {
  const [currentLocation, setCurrentLocation] = useState(defaultCenter);

  useEffect(() => {
    const watchId = checkMyLocation();

    // Czyszczenie watchPosition po odmontowaniu komponentu
    return () => {
      if (navigator.geolocation && watchId) {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  }, []);

  const checkMyLocation = () => {
    if (navigator.geolocation) {
      // Użycie watchPosition do ciągłego śledzenia lokalizacji
      const watchId = navigator.geolocation.watchPosition((position) => {
        setCurrentLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
      return watchId; // Zwracamy watchId, aby można było go wyczyścić później
    } else {
      console.log("error");

      return null;
    }
  };

  return (
    <>
      {currentLocation && (
        <LoadScript googleMapsApiKey="AIzaSyBL7C2LRxclklMp9It5Ghb0vEYYO56L8AU">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={currentLocation}
            zoom={12} // Zmniejszyłem zoom dla lepszej widoczności na niższym poziomie
          >
            {/* Dodanie markera */}
            <Marker position={currentLocation} />
          </GoogleMap>
        </LoadScript>
      )}
    </>
  );
};

export default App;

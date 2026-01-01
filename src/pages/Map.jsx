import { useEffect, useState } from "react";
import "../style/Map.css";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useNavigate } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";
import useGeolocation from "../Hooks/useGeolocation";
import useMapPosition from "../Hooks/useMapPosition";

function Map() {
  const { cities } = useCities();
  const [mapPosition, setMapPosition] = useState([20, 80]);

   const {lat,lng}=useMapPosition();
   

  const {
    isLoading: isLoadingPosition,
    position: geoLocationPosition,
    getPosition,
  } = useGeolocation();

  // 📍 from URL
  useEffect(() => {
    if (lat && lng) {
      setMapPosition([Number(lat), Number(lng)]);
    }
  }, [lat, lng]);

  // 📍 from Geolocation
  useEffect(() => {
    if (geoLocationPosition) {
      setMapPosition([
        geoLocationPosition.lat,
        geoLocationPosition.lng,
      ]);
    }
  }, [geoLocationPosition]);

  return (
    <div className="mapContainer">
     { !geoLocationPosition &&(<button className="button"
      onClick={getPosition}>
        {isLoadingPosition ? "Loading..." : "Use your position"}
      </button>)}

      <MapContainer
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {cities.map((city) => (
          <Marker
            key={city.id}
            position={[city.position.lat, city.position.lng]}
          >
            <Popup>{city.cityName}</Popup>
          </Marker>
        ))}

        <ChangeCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();

  useEffect(() => {
    map.setView(position);
  }, [position, map]);

  return null;
}

function DetectClick() {
  const navigate = useNavigate();

  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      navigate(`form?lat=${lat}&lng=${lng}`);
    },
  });

  return null;
}

export default Map;

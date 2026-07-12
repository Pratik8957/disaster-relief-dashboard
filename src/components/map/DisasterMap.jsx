import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";
import { useCity } from "../../context/CityContext";
import "leaflet/dist/leaflet.css";

const disasterIcon = new L.Icon({
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function ChangeMapView({ center }) {
  const map = useMap();

  useEffect(() => {
    map.flyTo(center, 11, {
      duration: 2,
    });
  }, [center, map]);

  return null;
}

function DisasterMap() {
  const { selectedCity, setSelectedCity, cityData } = useCity();

  const center = [
    cityData[selectedCity].lat,
    cityData[selectedCity].lng,
  ];

  return (
    <div>

      {/* City Selector */}
      <div className="mb-5 flex items-center gap-3">

        <label className="font-semibold text-white">
          📍 Select City
        </label>

        <select
          value={selectedCity}
          onChange={(e) =>
            setSelectedCity(e.target.value)
          }
          className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-white outline-none"
        >
          <option>Ghaziabad</option>
          <option>Delhi</option>
          <option>Varanasi</option>
          <option>Jaunpur</option>
        </select>

      </div>

      <MapContainer
        center={center}
        zoom={11}
        className="h-[600px] w-full rounded-2xl"
      >
        <ChangeMapView center={center} />

        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker
          position={center}
          icon={disasterIcon}
        >
          <Popup>
            <strong>{selectedCity}</strong>
            <br />
            Disaster Monitoring Area
          </Popup>
        </Marker>

      </MapContainer>

    </div>
  );
}

export default DisasterMap;
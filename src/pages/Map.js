import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Text from "../components/Text";

import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const LvivLocation = [49.8404, 24.0263];

const Map = () => {
  return (
    <>
    
    <MapContainer
      center={LvivLocation}
      zoom={13}
      style={{ height: "100vh", width: "100vw" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={LvivLocation}>
        <Popup>Чекатиму тебе тут❤️</Popup>
      </Marker>
    </MapContainer>
    <Text text={'Місце зустрічі змінити неможливо ❤️'}/>
    </>

  );
};

export default Map;

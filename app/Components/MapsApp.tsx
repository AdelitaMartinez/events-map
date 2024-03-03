"use client";
import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { Icon } from "leaflet";

interface HistoricalEvent {
  id: number;
  title: string;
  description: string;
  position: [number, number];
  category: string;
}

const defaultPosition: [number, number] = [51.505, -0.09];

function MapsApp() {

  const icon: Icon = new Icon({
    iconUrl: "marker.svg",
    iconSize: [25, 41],
    iconAncor: [12,41],
  }); 

  const eventsData: HistoricalEvent[] = [
    {
      id: 1,
      title: "Normandy Landings (D-Day)",
      description: "Applied force landed on the beaches or Normandy, France on june 6.",
      position: [49.4144, -0.8322],
      category: "War",
    }
  ];

  return  
  <div className="content">
  <div className="flex flex-col w-full h-full"
    <div className="h-12"></div>
    <MapContainer 
    center={defaultPosition} 
    zoom={13} 
    className="map-container"
    >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={defaultPosition} icon={icon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>

    </MapContainer>
  </div>
 </div>
}

export default MapsApp;
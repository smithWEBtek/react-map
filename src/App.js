import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import './App.css';

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 42.2819229,
    longitude: -71.0849532,
    zoom: 13,
    width: '90vw',
    height: '90vh',
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>React with MapboxGL</h1>
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          onViewportChange={(viewport) => { setViewport(viewport) }}
          mapStyle="mapbox://styles/smithwebtek/ckqk5ktyu15no17o62u1pjb8n"
        />
      </header>
    </div>
  );
}

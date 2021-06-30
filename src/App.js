import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import './App.css';

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 42.2819229,
    longitude: -71.0849532,
    zoom: 10,
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
        />
      </header>
    </div>
  );
}

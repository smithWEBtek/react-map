import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import './App.css';
import AudioMapPoints from './boundaries/audio_map_points.json';
// import ErrorBoundary from './ErrorBoundary';
import Mic from './assets/mapIcons/mic-fill.svg';

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
          mapStyle="mapbox://styles/smithwebtek/ckqk5ktyu15no17o62u1pjb8n">
          {AudioMapPoints.features.map(audio => (
            <Marker
              key={audio.properties.id}
              type={audio.type}
              latitude={audio.geometry.coordinates[1]}
              longitude={audio.geometry.coordinates[0]}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <button className="marker-btn">
                <img src={Mic} alt="microphone" />
              </button>
            </Marker>
          ))
          })
        </ReactMapGL>
      </header>
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import { Paper } from '@material-ui/core';

import MapGL, { Source, Layer } from 'react-map-gl';
import { heatmapLayer } from './map-style.js';

const Heatmap = () => {
  const [viewport, setViewport] = useState({
    latitude: 40,
    longitude: -100,
    zoom: 3,
    bearing: 0,
    pitch: 0,
  });

  const [earthquakes, setEarthQuakes] = useState(null);

  useEffect(() => {
    /* global fetch */
    fetch('https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson')
      .then((resp) => resp.json())
      .then((json) => {
        // Note: In a real application you would do a validation of JSON data before doing anything with it,
        // but for demonstration purposes we ingore this part here and just trying to select needed data...
        setEarthQuakes(json);
      });
  }, []);

  return (
    <Paper
      elevation={3}
      style={{ width: '100%', height: '600px', margin: '20px' }}
    >
      <MapGL
        {...viewport}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/mapbox/basic-v9"
        onViewportChange={setViewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      >
        {earthquakes && (
          <Source type="geojson" data={earthquakes}>
            <Layer {...heatmapLayer} />
          </Source>
        )}
      </MapGL>
    </Paper>
  );
};

export default Heatmap;

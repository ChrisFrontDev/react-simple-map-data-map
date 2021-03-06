import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import brasil from "./brasilTopoJson.json";

const geoUrl = brasil
const markers = [

  { markerOffset: 15, name: "Brasilia", coordinates: [-47.8825, -15.7942] },

];

const MapChart = () => {
  const [region, setRegion] = useState("nordeste");

  useEffect(() => {

  }, []);

  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [58, 20, 0],
        scale: 400
      }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const state = brasil.objects.estados.geometries.find(state => geo.id === state.id)
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={state.region === region ? '#C5E2B7' : '#E0E5DF'}
                stroke="#fff"
              />
            )
          })
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <g
            fill="none"
            stroke="#FF5533"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(-12, -24)"
          >
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default MapChart;

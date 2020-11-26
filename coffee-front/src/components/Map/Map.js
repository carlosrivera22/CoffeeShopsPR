import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";
const geoUrl =
  "https://raw.githubusercontent.com/commonwealth-of-puerto-rico/crime-spotter/master/public/data/municipalities.geojson";


const Map = (props) => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [66.25, -17.9, 0],
        scale: 21900
      }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies
            .map(geo => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#EAEAEC"
                stroke="#D6D6DA"
              />
            ))
        }
      </Geographies>
      {props.markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          
            <circle r={2} fill="#F00" stroke="#fff" strokeWidth={1} />
            <text
            textAnchor="right"
            y={markerOffset}
            x={2}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D", fontSize: "5px" }}
            >
            {name}
            </text>

        </Marker>
      ))}
    </ComposableMap>
  );
};

export default Map;

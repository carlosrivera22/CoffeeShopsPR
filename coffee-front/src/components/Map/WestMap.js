import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";
const geoUrl =
  "https://raw.githubusercontent.com/commonwealth-of-puerto-rico/crime-spotter/master/public/data/municipalities.geojson";


const WestMap = (props) => {
  return (
    <ComposableMap 
    style={{ height: '30rem', width: '60%'}}
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [67.05, -18.2013, 0],
        scale: 75000
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
          
            <circle r={5} fill="black" stroke="#fff" strokeWidth={3} />
            <text
            textAnchor="right"
            y={markerOffset}
            x={6}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D", fontSize: "16px" }}
            >
            {name}
            </text>

        </Marker>
      ))}
    </ComposableMap>
  );
};

export default WestMap;

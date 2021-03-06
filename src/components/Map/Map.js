import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from "react-simple-maps";
const geoUrl =
  "https://raw.githubusercontent.com/commonwealth-of-puerto-rico/crime-spotter/master/public/data/municipalities.geojson";


const Map = (props) => {
  return (
    <ComposableMap
    style={{ height:  '100%', width: '85%'}}
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [66.32, -17.95, 0],
        scale: 25000
      }}
    >
      <ZoomableGroup zoom={1}>
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
          
          <circle r={2} fill="black" stroke="#fff" strokeWidth={1} />
            <text
            textAnchor="right"
            y={markerOffset}
            x={5}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D", fontSize: "10px" }}
            >
            {name}
            </text>

        </Marker>
        
      ))}
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default Map;

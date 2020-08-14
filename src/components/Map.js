import React from "react";
import { GoogleMapLoader, GoogleMap, Polygon } from "react-google-maps";

export default function Map(props) {
  return (
    <GoogleMapLoader
      containerElement={
        <div
          style={{
            height: "400px",
          }}
          {...props.containerProps}
        />
      }
      googleMapElement={
        <GoogleMap>
          {props.polygons.map((polygon, index) => {
            return (
              <Polygon
                key={index}
                paths={polygon.coordinates}
                options={{
                  strokeWeight: 1,
                  fillColor: "red",
                  fillOpacity: 1,
                  strokeColor: "black",
                }}
              />
            );
          })}
        </GoogleMap>
      }
    />
  );
}

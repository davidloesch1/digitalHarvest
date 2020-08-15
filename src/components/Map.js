import React, { Component } from "react";
const { compose, withProps } = require("recompose");
const { withScriptjs, withGoogleMap, GoogleMap } = require("react-google-maps");
const {
  DrawingManager,
} = require("react-google-maps/lib/components/drawing/DrawingManager");

let url = process.env.REACT_APP_GOOGLE_API;
const editTrack = (polygon) => {
  let GeoJSON = {
    type: "Feature",
    geometry: {
      type: "Polygon",
      coordinates: [[]],
    },
    properties: {},
  };
  for (let point of polygon.getPath().getArray()) {
    GeoJSON.geometry.coordinates[0].push([point.lng(), point.lat()]);
  }
  GeoJSON.geometry.coordinates[0].push(GeoJSON.geometry.coordinates[0][0]);
  return GeoJSON;
};
//this is where we will keep our polygon when it is drawn
let latestPolygon;

const Map = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=" +
      url +
      "&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%`, width: `100%` }} />,
    containerElement: <div style={{ height: `400px`, width: `100%` }} />,
    mapElement: <div style={{ height: `100%`, width: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={new window.google.maps.LatLng(32.095, 35.398)}
  >
    <DrawingManager
      onPolygonComplete={(polygon) => {console.log(polygon)}}
      //   //if we have a polygon on the map, delete it now
      //   latestPolygon && latestPolygon.setMap(null);
      //   polygon.setEditable(true);
      //   props.getGeoJSON(editTrack(polygon));
        // window.google.maps.event.addListener(
        //   polygon.getPath(),
        //   "insert_at",
        //   function (index, obj) {
        //     props.getGeoJSON(editTrack(polygon));
        //   }
        // );
        // window.google.maps.event.addListener(
        //   polygon.getPath(),
        //   "set_at",
        //   function (index, obj) {
        //     props.getGeoJSON(editTrack(polygon));
        //   }
        // );
        //now we set the storage polygon to be the one we just drew
      //   latestPolygon = polygon;
      //   console.log(latestPolygon)
      // }}
      defaultOptions={{
        drawingControl: true,
        drawingControlOptions: {
          style: window.google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
          position: window.google.maps.ControlPosition.TOP_CENTER,
          drawingModes: [window.google.maps.drawing.OverlayType.POLYGON, window.google.maps.drawing.OverlayType.CIRCLE],
        },
      }}
    />
  </GoogleMap>
));

export default Map;

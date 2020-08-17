import React, { Component } from "react";
import OlMap from "ol/Map";
import OlView from "ol/View";
import { Modify, Draw, Snap } from "ol/interaction";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Style from "ol/style/Style";
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";
import CircleStyle from "ol/style/Circle";
import GeoJSON from "ol/format/GeoJSON";

class PublicMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      geojsonCurrent: null,
      geojsonArray: [],
      center: [1000, 0],
      zoom: 1,
      vector: null,
      type: "Polygon",
      raster: new TileLayer({
        source: new OSM(),
      }),
      vector: null,
    };
    this.lastFeature = null;
    this.source = new VectorSource({
      wrapX: false,
    });
    this.draw = null;
    this.vector = new VectorLayer({
      source: this.source,
      style: new Style({
        fill: new Fill({
          color: "rgb(255,255,255, 0.2)",
        }),
        stroke: new Stroke({
          color: "ffcc33",
          width: 2,
        }),
        image: new CircleStyle({
          radius: 7,
          fill: new Fill({
            color: "#ffcc33",
          }),
        }),
      }),
    });
    this.modify = new Modify({ source: this.source });
    this.olmap = new OlMap({
      target: null,
      layers: [this.state.raster, this.vector],
      view: new OlView({
        center: this.state.center,
        zoom: this.state.zoom,
      }),
    });
    this.olmap.addInteraction(this.modify);
  }

  addInteraction = () => {
    let source = this.source;
    if (this.draw) {
      this.olmap.removeInteraction(this.draw);
    }

    this.draw = new Draw({
      source: this.source,
      type: this.state.type,
    });

    this.draw.on("drawend", (e) => {
      this.lastFeature = e.feature;
      console.log(e.feature);
      // let writer = new GeoJSON();
      // let geoString = writer.writeFeature(e.feature);
      // console.log(geoString);
      this.setState({
        geojsonCurrent: e.feature,
      });
      this.olmap.removeInteraction(this.draw);
    });

    this.draw.on("drawstart", (e) => {
      //clears out the previous polygon
      this.setState({ geojsonCurrent: null });
      this.source.clear();
    });

    // this allows the mouse to draw the polygon on the map
    this.olmap.addInteraction(this.draw);

    // let modify = new Modify({ source: source });
    let snap = new Snap({ source: source });
    this.olmap.addInteraction(snap);
    // this.olmap.addInteraction(modify);
  };

  updateMap = () => {
    this.olmap.getView().setCenter(this.state.center);
    this.olmap.getView().setZoom(this.state.zoom);
  };

  componentDidMount() {
    //adds the map to the "map" div that is now mounted.
    this.olmap.setTarget("map");

    // Listen to map changes
    this.olmap.on("moveend", () => {
      let center = this.olmap.getView().getCenter();
      let zoom = this.olmap.getView().getZoom();
      this.setState({ center, zoom });
    });
    // this.addInteraction();
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addName = () => {
    let copy = this.state.geojsonCurrent;
    if (copy) {
      copy.setProperties({ name: this.state.name });
      let writer = new GeoJSON();
      let geoString = writer.writeFeature(copy);
      console.log(geoString);
      this.setState({
        geojsonArray: [...this.state.geojsonArray, geoString],
        name: "",
        geojsonCurrent: null,
      });
      this.source.clear();
    }
  };

  shouldComponentUpdate(nextProps, nextState) {
    let center = this.olmap.getView().getCenter();
    let zoom = this.olmap.getView().getZoom();
    if (center === nextState.center && zoom === nextState.zoom) return false;
    return true;
  }

  userAction() {
    this.addInteraction();
  }

  render() {
    return (
      <>
        <div
          id="map"
          style={{ width: "100%", height: "360px" }}
          className="container"
        >
          <br></br>
          <button
            className="btn btn-primary btn-sm"
            onClick={(e) => this.userAction()}
          >
            Draw New Polygon
          </button>
          <input
            type="text"
            className="form-control"
            onChange={this.handleChange}
            value={this.state.name}
            name="name"
          ></input>
          <button
            type="submit"
            onClick={this.addName}
            className="btn btn-primary"
          >
            Add Name
          </button>
          <br></br>
          <br></br>
        </div>
      </>
    );
  }
}

export default PublicMap;

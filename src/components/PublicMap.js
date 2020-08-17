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
import { apiURL } from "../url";
import { Alert } from "reactstrap";
const axios = require("axios");

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
      visible: false,
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
  onAlert = () => {
    this.setState({ visible: true }, () => {
      window.setTimeout(() => {
        this.setState({ visible: false });
      }, 3000);
    });
  };

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

  addName = async () => {
    let copy = this.state.geojsonCurrent;
    if (copy) {
      copy.setProperties({ name: this.state.name });
      await this.setState({
        geojsonCurrent: copy,
      });
      await this.addPolygons();
      this.source.clear();
    }
  };

  addPolygons = async () => {
    let feature = this.state.geojsonCurrent;
    let coordinates = feature.getGeometry().getCoordinates(); // console.log(coordinates)
    let name = this.state.name;
    await this.setState({
      name: "",
    });
    let obj = {
      name: name,
      coordinates: coordinates,
    };
    // let writer = new GeoJSON();
    // let geoString = writer.writeFeature(obj);
    axios
      .post(apiURL + "/map", obj)
      .then((res) => {
        if(res.status === 200) this.onAlert()
      })
      
  };

  userAction() {
    this.addInteraction();
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-8">
          <div
            id="map"
            style={{ width: "100%", height: "500px" }}
            className="container"
          ></div>
        </div>
        <div className="col-4 bg-light">
          <button
            className="btn btn-primary btn-sm my-3"
            onClick={(e) => this.userAction()}
          >
            Draw New Polygon
          </button>
          <input
            className="form-control"
            type="text"
            placeholder="Name of polygon"
            value={this.state.name}
            onChange={this.handleChange.bind(this)}
            name="name"
          />
          <button
            type="submit"
            onClick={this.addName}
            className="btn btn-primary my-3"
          >
            Submit
          </button>
          <Alert color="success" isOpen={this.state.visible}>
            Map Added successfully!
          </Alert>
        </div>
      </div>
    );
  }
}

export default PublicMap;

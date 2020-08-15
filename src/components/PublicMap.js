import React, { Component } from "react";
import OlMap from "ol/Map";
import OlView from "ol/View";
import OlLayerTile from "ol/layer/Tile";
import OlSourceOSM from "ol/source/OSM";
import { Modify, Draw, Snap } from "ol/interaction";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Style from "ol/style/Style";
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";
import CircleStyle from 'ol/style/Circle'

class PublicMap extends Component {
  constructor(props) {
    super(props);

    this.state = { center: [1000, 0], zoom: 1, type: "Polygon" };
    this.source = new VectorSource();
    this.raster = new TileLayer({
      source: new OSM()
    })
    this.vector = new VectorLayer({
      source: this.source,
      style: new Style({
        fill: new Fill({
          color: 'rgb(255,255,255, 0.2)',
        }),
        stroke: new Stroke({
          color: '#ffcc33',
          width: 2,
        }),
        image: new CircleStyle({
          radius: 7,
          fill: new Fill({
            color: '#ffcc33'
          })
        })
      })
    })

    this.olmap = new OlMap({
      target: null,
      layers: [this.raster, this.vector],
      view: new OlView({
        center: this.state.center,
        zoom: this.state.zoom,
      }),
    });
    this.modify = new Modify({ source: this.source });
    this.olmap.addInteraction(this.modify);
  }
  addInteraction = () => {
    let draw = new Draw({
      source: this.source,
      type: this.state.type,
    });
    this.olmap.addInteraction(draw);
    let snap = new Snap({ source: this.source });
    this.olmap.addInteraction(snap);
  }

  updateMap = () => {
    this.olmap.getView().setCenter(this.state.center);
    this.olmap.getView().setZoom(this.state.zoom);
  }

  componentDidMount() {
    this.olmap.setTarget("map");

    // Listen to map changes
    this.olmap.on("moveend", () => {
      let center = this.olmap.getView().getCenter();
      let zoom = this.olmap.getView().getZoom();
      this.setState({ center, zoom });
    });
    this.addInteraction()
  }

  shouldComponentUpdate(nextProps, nextState) {
    let center = this.olmap.getView().getCenter();
    let zoom = this.olmap.getView().getZoom();
    if (center === nextState.center && zoom === nextState.zoom) return false;
    return true;
  }

  userAction() {
    this.setState({ center: [546000, 6868000], zoom: 5 });
  }

  render() {
    this.updateMap(); // Update map on render?
    return (
      <div id="map" style={{ width: "100%", height: "360px" }}>
        <button onClick={(e) => this.userAction()}>setState on click</button>
      </div>
    );
  }
}

export default PublicMap;

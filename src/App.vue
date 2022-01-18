<!--template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template-->

<template>
  <div id="mymap"></div>
</template>

<script>
// import { L } from 'leaflet';
import * as L from 'leaflet';
import '../vendor/tile.stamen';

export default {
  mounted() {
    const layer = new L.StamenTileLayer('terrain');
    const map = new L.Map('mymap', {
      /* Center: Munich, Germany */
      center: new L.LatLng(48.1, 11.5),
      /* Show most of western Europe */
      zoom: 6,
    });
    map.addLayer(layer);
  },
};
</script>

<style>
#mymap { height: 100%; }
@import '../node_modules/leaflet/dist/leaflet.css'
</style>

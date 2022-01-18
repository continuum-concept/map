<template>
  <div class="map"></div>
</template>

<script>
import * as L from 'leaflet';
import '../vendor/tile.stamen';

export default {
  mounted() {
    const layer = new L.StamenTileLayer('terrain');
    const map = new L.Map(this.$el, {
      /* Center: Caura River in Venezuela */
      center: new L.LatLng(6.310521, -64.523735),
      zoom: 9,
    });
    map.addLayer(layer);
  },
};
</script>

<style scoped>
.map {
  height: 100%;
  width: 100%;
}
@import '../node_modules/leaflet/dist/leaflet.css'
</style>

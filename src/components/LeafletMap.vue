<template>
  <div class="map"></div>
</template>

<script>
import * as L from 'leaflet';
import 'Vendor/tile.stamen';

export default {
  props: {
    zoom: {
      type: Number,
      default: 3,
    },
    center: {
      type: Object,
      default() { return { lat: 0, lng: 0 }; },
    },
  },
  mounted() {
    const layer = new L.StamenTileLayer('terrain');
    const map = new L.Map(this.$el, {
      center: new L.LatLng(this.center.lat, this.center.lng),
      zoom: this.zoom,
    });
    map.addLayer(layer);
  },
};
</script>

<style scoped>
.map {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

@import '~leaflet/dist/leaflet.css'
</style>

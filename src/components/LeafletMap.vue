<template>
  <div ref='map' class="map"></div>
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
    this.map = new L.Map(this.$el, {
      center: new L.LatLng(this.center.lat, this.center.lng),
      zoom: this.zoom,
    });
    this.map.addLayer(layer);

    this.resize_observer = new ResizeObserver(this.onMapContainerResize);
    this.resize_observer.observe(this.$refs.map);
  },
  beforeUnmount() {
    this.resize_observer.unobserve(this.$refs.map);
  },
  methods: {
    setView() {
      this.map.setView(new L.LatLng(this.center.lat, this.center.lng));
    },
    onMapContainerResize() {
      this.map.invalidateSize();
    },
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

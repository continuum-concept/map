<template>
  <div id='map-container'>
    <div id='map-form'>
    <!--
      - Short Name / Pseudonym
      - Full Name
      - Latitude, Longitude in decimal notation
      - Button to set view to these coordinates
      - Options (popup with description):
        [ ] show on map
        [ ] make name public
        [ ] blur the coordinates
      - Save Button
    -->
    </div>
    <leaflet-map :center="{lat: 6.310521, lng: -64.523735}" zoom=10>
    </leaflet-map>
  </div>
</template>

<script>
import LeafletMap from './components/LeafletMap.vue';

export default {
  components: {
    LeafletMap,
  },
};
</script>

<style>
#map-form {
  height: 100%;
  background-color: blue;
  width: 200px;
}

#map-container {
  height: 100%;
  display: flex;
}
</style>

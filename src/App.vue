<template>
  <splitpanes class="default-theme">
    <pane size='20'>
      <user-coordinates-form
        :lat="latitude"
        :lng="longitude"
        @center="center">
      </user-coordinates-form>
    </pane>
  <pane size='80'>
    <leaflet-map
      ref="map"
      :center="{lat: latitude, lng: longitude}"
      :zoom=10>
    </leaflet-map>
  </pane>
</splitpanes>
</template>

<script>
import { Splitpanes, Pane } from 'splitpanes';
import 'splitpanes/dist/splitpanes.css';
import LeafletMap from './components/LeafletMap.vue';
import UserCoordinatesForm from './components/UserCoordinatesForm.vue';

export default {
  data() {
    return {
      latitude: 6.310521,
      longitude: -64.523735,
    };
  },
  components: {
    LeafletMap,
    Splitpanes,
    Pane,
    UserCoordinatesForm,
  },
  methods: {
    center(coordinates) {
      this.latitude = coordinates.lat;
      this.longitude = coordinates.lng;
      this.$nextTick(this.$refs.map.setView);
    },
  },
};
</script>

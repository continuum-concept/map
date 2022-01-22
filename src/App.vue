<template>
  <div id='map-container'>
        <form id='map-form'>
          <input type='text' v-model="form.pseudonym" placeholder="pseudonym">
          <div class='input-with-checkbox'>
            <input type='text' v-model="form.name" placeholder="real name">
            <label>
              <input type="checkbox" v-model="form.hide_real_name">
              Conceal
            </label>
          </div>

          <hr>

          <div class='input-table-grid'>
            <div class='input-column'>
              <label class='top'>Latitude</label>
              <input type='text' v-model="form.latitude" placeholder="latitude">
            </div>
            <div class='input-column'>
              <label class='top'>Longitude</label>
              <input type='text' v-model="form.longitude" placeholder="longitude">
            </div>
            <button type="button" v-on:click="center">Center</button>
          </div>

          <hr>

          <label>
            <input type="checkbox" v-model="form.blurred">
            Blur coordinates
          </label>
          <label>
            <input type="checkbox" v-model="form.not_on_map">
            Don't show on map
          </label>

          <hr>

          <button class='visible' type="button" v-on:click="save">Save</button>
        </form>
        <leaflet-map
            ref="map"
            :center="{lat: form.latitude, lng: form.longitude}"
            :zoom=10>
        </leaflet-map>
  </div>
</template>

<script>
// import { Splitpanes, Pane } from 'splitpanes';
import LeafletMap from './components/LeafletMap.vue';

export default {
  data() {
    return {
      form: {
        pseudonym: '',
        name: '',
        hide_real_name: true,
        not_on_map: false,
        blurred: true,
        latitude: 6.310521,
        longitude: -64.523735,
      },
    };
  },
  components: {
    LeafletMap, // Splitpanes, Pane,
  },
  methods: {
    center() {
      this.$refs.map.setView();
    },
  },
};
</script>

<style scoped>
#map-form {
  height: 100%;
  width: 40%;
  max-width: 20em;
  #margin: .8em;
  padding: .8em;
  background: #e3f9eb;
}

hr {
  margin-bottom: .5em;
  opacity: 0;
}

label {
  display: block;
}

label.top {
  display: block;
  margin-bottom: .2em;
}

input[type=checkbox] {
  margin: 0;
}

input, input[type=checkbox] {
  margin-bottom: 1em;
}

input[type=text] {
  width: 100%;
  max-width: 12em;
  display: block;
  box-sizing: border-box;
  padding: .3em;
  border: 1px solid black;
}

input[type=text]:focus {
  outline: none;
  border-color: #DD3411;
  box-shadow: 0 0 6px #DD3411;
}

button {
  text-align: center;
  padding: .3em;
  height: 2em;
  text-decoration: none;
  font-size: 0.9em;
  margin-bottom: 1em;
}

#map-container {
  height: 100%;
  display: flex;
}

.input-table-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 6em);
  gap: 0 1em;
  align-items: end;
}

.input-table-grid label {
  font-size: .9em;
}

.input-table-grid  input[type=text] {
  width: 6em;
  box-sizing: content-box;
}

.input-with-checkbox {
  display: inline-flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 0 1em;
  margin-bottom: 1em;
}

.input-with-checkbox label {
  margin-top: .3em;
}

.input-with-checkbox input {
  margin-bottom: 0;
}

button.visible {
  padding-left: 2em;
  padding-right: 2em;
  height: 2.5em;
  background: #FF795D;
  border: 0;
  color: white;
}

button.visible:hover {
  background: #FFB35D;
}
</style>

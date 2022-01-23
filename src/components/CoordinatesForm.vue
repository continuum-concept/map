<template>
    <div class='input-table-grid'>
      <div class='input-column'>
        <label>Latitude</label>
        <f-input v-model="form.latitude" placeholder="latitude" />
      </div>
      <div class='input-column'>
        <label>Longitude</label>
        <f-input v-model="form.longitude" placeholder="longitude" />
      </div>
      <button type="button" v-on:click="emitCenter">Center</button>
    </div>
</template>

<script>
import FInput from './FInput.vue';

export default {
  props: {
    lat: {
      type: Number,
    },
    lng: {
      type: Number,
    },
  },
  data() {
    return {
      form: {
        latitude: this.lat,
        longitude: this.lng,
      },
    };
  },
  methods: {
    emitCenter() {
      this.$emit('center', {
        lat: this.form.latitude,
        lng: this.form.longitude,
      });
    },
  },
  components: {
    FInput,
  },
};
</script>

<style src='Css/form.css' scoped />

<style scoped>
label {
  display: block;
  margin-bottom: .2em;
  font-size: .9em;
}

.input-table-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 6em);
  gap: 1em;
  align-items: end;
}

input[type=text] {
  width: 6em;
  box-sizing: content-box;
}
</style>

<template>
    <div class='input-table-grid'>
      <div class='input-column'>
        <label>Latitude</label>
        <input type='text' v-model="form.latitude" placeholder="latitude">
      </div>
      <div class='input-column'>
        <label>Longitude</label>
        <input type='text' v-model="form.longitude" placeholder="longitude">
      </div>
      <button type="button" v-on:click="emitCenter">Center</button>
    </div>
</template>

<script>
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
};
</script>

<style scoped>
label {
  display: block;
  margin-bottom: .2em;
  font-size: .9em;
}

button {
  text-align: center;
  padding: .3em;
  height: 2em;
  text-decoration: none;
  font-size: 0.9em;
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

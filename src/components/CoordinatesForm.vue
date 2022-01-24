<template>
    <div class='input-table-grid'>
      <div class='input-column'>
        <label>Latitude</label>
        <f-input
          :value="this.lat"
          @update:modelValue="this.$emit('update:lat', $event)"
          placeholder="latitude" />
      </div>
      <div class='input-column'>
        <label>Longitude</label>
        <f-input
          :value="this.lng"
          @update:modelValue="this.$emit('update:lng', $event)"
          placeholder="longitude" />
      </div>
      <button type="button" v-on:click="this.$emit('center')">Center</button>
    </div>
</template>

<script>
import FInput from './FInput.vue';

export default {
  props: { lat: Number, lng: Number },
  components: { FInput },
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

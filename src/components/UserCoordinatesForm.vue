<template>
  <form id='map-form'>
    <f-input v-model="form.pseudonym" placeholder="pseudonym" />

    <div class='vspace-small'></div>

    <div class='flex-wrap' style='gap: .2em 1em;'>
      <f-input type='text' v-model="form.name" placeholder="real name" />
      <f-checkbox v-model="form.hide_real_name">Conceal</f-checkbox>
    </div>

    <div class='vspace-big'></div>

    <coordinates-form @center="emitCenter" :lat="this.lat" :lng="this.lng">
    </coordinates-form>

    <div class='vspace-big'></div>

    <f-checkbox v-model="form.blurred">Blur coordinates</f-checkbox>
    <div class='vspace-small'></div>
    <f-checkbox v-model="form.not_on_map">Hide from map</f-checkbox>

    <div class='vspace-big'></div>

    <button class='visible' type="button" v-on:click="emitSave">Save</button>
  </form>
</template>

<script>
import CoordinatesForm from './CoordinatesForm.vue';
import FCheckbox from './FCheckbox.vue';
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
        pseudonym: '',
        name: '',
        hide_real_name: true,
        not_on_map: false,
        blurred: true,
        latitude: this.lat,
        longitude: this.lng,
      },
    };
  },
  methods: {
    emitCenter(coordinates) {
      this.$emit('center', coordinates);
    },
    emitSave() {
      this.$emit('save', this.form);
    },
  },
  components: {
    CoordinatesForm, FCheckbox, FInput,
  },
};
</script>

<style src='Css/form.css' scoped />

<style scoped>
#map-form {
  height: 100%;
  padding: .8em;
  background: #e3f9eb;
}
</style>

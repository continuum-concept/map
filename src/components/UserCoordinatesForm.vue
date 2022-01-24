<template>
  <form id='map-form'>
    <f-input v-model:modelValue="form.pseudonym" placeholder="pseudonym" />

    <div class='vspace-small'></div>

    <f-input-with-checkbox
        placeholder='real name'
        v-model:inputValue="form.name"
        checkboxLabel='Conceal'
        v-model:checked="form.hide_real_name" />

    <div class='vspace-big'></div>

    <coordinates-form
        @center="this.$emit('center', { lat: form.lat, lng: form.lng })"
        v-model:lat="this.form.lat"
        v-model:lng="this.form.lng" />

    <div class='vspace-big'></div>

    <f-checkbox v-model="form.blurred">Blur coordinates</f-checkbox>
    <div class='vspace-small'></div>
    <f-checkbox v-model="form.not_on_map">Hide from map</f-checkbox>

    {{ form.not_on_map ? 'checked' : 'unchecked' }}

    <div class='vspace-big'></div>

    <button class='visible' type="button" v-on:click="emitSave">Save</button>
  </form>
</template>

<script>
import CoordinatesForm from './CoordinatesForm.vue';
import FCheckbox from './FCheckbox.vue';
import FInput from './FInput.vue';
import FInputWithCheckbox from './FInputWithCheckbox.vue';

export default {
  props: { lat: Number, lng: Number },
  data() {
    return {
      form: {
        pseudonym: '',
        name: '',
        hide_real_name: true,
        not_on_map: false,
        blurred: true,
        lat: this.lat,
        lng: this.lng,
      },
    };
  },
  methods: { emitSave() { this.$emit('save', this.form); } },
  components: {
    CoordinatesForm, FCheckbox, FInput, FInputWithCheckbox,
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

<template>
  <form id='map-form'>
    <f-input v-model="form.pseudonym" placeholder="pseudonym"></f-input>
    <hr class='small'>
    <div class='input-with-checkbox'>
      <f-input type='text' v-model="form.name" placeholder="real name"></f-input>
      <f-checkbox v-model="form.hide_real_name">Conceal</f-checkbox>
    </div>

    <hr class='big'>

    <coordinates-form @center="emitCenter" :lat="this.lat" :lng="this.lng">
    </coordinates-form>

    <hr class='big'>

    <f-checkbox v-model="form.blurred">Blur coordinates</f-checkbox>
    <hr class='small'>
    <f-checkbox v-model="form.not_on_map">Hide from map</f-checkbox>

    <hr class='big'>

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

<style scoped>
#map-form {
  height: 100%;
  width: 100%;
  padding: .8em;
  background: #e3f9eb;
}

hr.small {
  margin: 0.5em;
  opacity: 0;
}

hr.big {
  margin: 1em;
  opacity: 0;
}

button {
  text-align: center;
  padding: .3em;
  height: 2em;
  text-decoration: none;
  font-size: 0.9em;
  margin-bottom: 1em;
}

.input-with-checkbox {
  display: inline-flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  gap: .2em 1em;
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

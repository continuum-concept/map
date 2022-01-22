<template>
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

    <coordinates-form @center="emitCenter" :lat="this.lat" :lng="this.lng">
    </coordinates-form>

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

    <button class='visible' type="button" v-on:click="emitSave">Save</button>
  </form>
</template>

<script>
import CoordinatesForm from './CoordinatesForm.vue';

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
    CoordinatesForm,
  },
};
</script>

<style type="text/css" media="screen">
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
</style>

<style scoped>
#map-form {
  height: 100%;
  width: 100%;
  padding: .8em;
  background: #e3f9eb;
}

hr {
  margin: 1em;
  opacity: 0;
}

label {
  display: block;
}

input[type=checkbox] {
  margin: 0;
}

input, input[type=checkbox] {
  margin-bottom: 1em;
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

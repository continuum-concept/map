<template>
  <input
    :value="modelValue"
    :placeholder="placeholder"
    @input="$emit('update:modelValue', $event.target.value)">
</template>

<script>
export default {
  props: {
    modelValue: String,
    placeholder: String,
  },
  emits: ['update:modelValue'],
};
</script>

<style scoped>
input {
  width: 100%;
  max-width: 12em;
  display: block;
  box-sizing: border-box;
  border: 1px solid black;
  font-family: sans-serif;
  font-size: 0.9em;
  border-radius: .3em;
  height: 2em;
  padding: 0 .5em 0 .5em
}

input:focus {
  outline: none;
  border-color: #DD3411;
  box-shadow: 0 0 6px #DD3411;
}
</style>

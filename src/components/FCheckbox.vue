<template>
  <label>
    <input
      type="checkbox"
      :checked="modelValue"
      @input="$emit('update:modelValue', $event.target.value)">
    <slot></slot>
  </label>
</template>

<script>
export default {
  props: {
    modelValue: Boolean,
  },
  emits: ['update:modelValue'],
};
</script>

<style scoped>
label {
  display: block;
}

input {
  margin: 0;
  margin-right: .5em;
}
</style>

<template>
  <label>
    <input
        type="checkbox"
        :checked="modelValue"
        true-value="yes"
        false-value="no"
        @input="this.$emit('update:modelValue', $event.target.checked)">
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

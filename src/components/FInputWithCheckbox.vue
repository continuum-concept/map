<template>
  <div class='flex-wrap' style='gap: .2em 1em;'>
    <f-input
      :modelValue="inputValue"
      @update:modelValue="this.$emit('update:inputValue', $event)"
      type='text'
      :placeholder="placeholder"
    />
    <f-checkbox
      :modelValue="checked"
      @update:modelValue="this.$emit('update:checked', $event)">
      {{ checkboxLabel }}
    </f-checkbox>
  </div>
</template>

<script>
import FCheckbox from './FCheckbox.vue';
import FInput from './FInput.vue';

export default {
  props: {
    checked: Boolean,
    inputValue: String,
    checkboxLabel: String,
    placeholder: String,
  },
  emits: ['update:checked', 'update:inputValue'],
  components: { FInput, FCheckbox },
};
</script>

<style src='Css/form.css' scoped />

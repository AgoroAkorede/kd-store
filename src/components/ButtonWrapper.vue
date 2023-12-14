<template>
  <button
    @click="buttonProps.buttonFunc"
    :class="`${buttonProps.extendedClass} h-15 cursor-pointer flex space-y-4`"
    :style="{ height: buttonProps.height, width: buttonProps.width }"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { PropType } from 'vue'
import { ButtonProps } from '../types'
export default {
  name: 'ButtonWrapper',
  props: {
    buttonProps: {
      type: Object as PropType<ButtonProps>,
      required: true
    },
    text: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  }
}
</script>

<style></style>

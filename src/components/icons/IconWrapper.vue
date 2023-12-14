<template>
  <router-link class="h-15 cursor-pointer flex space-y-4 flex-col" :to="iconName">
    <div :class="[iconName, 'h-[2rem] w-[2rem] flex self-start']">
      <slot></slot>
    </div>
    <h2 class="text-xs text-[#c2c2c2]">{{ iconText }}</h2>
  </router-link>
</template>

<script lang="ts">
export default {
  name: 'IconWrapper',
  props: {
    iconName: {
      type: String,
      default: null
    },
    iconText: {
      type: String,
      default: null
    }
  },
  data() {
    return {}
  },
  computed: {
    iconNameClass() {
      return this.iconName.toLowerCase()
    }
  }
}
</script>

<style></style>

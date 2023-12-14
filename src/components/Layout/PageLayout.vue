<template>
  <div class="text-store-white">
    <header-layout />
    <div class="flex flex-row">
      <side-tab-component />
      <div class="flex flex-col overflow-hidden">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import SideTabComponentVue from '../SideTabComponent.vue'
import HeaderLayoutVue from './HeaderLayout.vue'
export default {
  components: {
    'side-tab-component': SideTabComponentVue,
    'header-layout': HeaderLayoutVue
  },
  name: 'PageLayout'
}
</script>

<style></style>

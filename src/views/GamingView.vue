<script>
import PageLayoutVue from '../components/Layout/PageLayout.vue'
import SideTabComponentVue from '../components/SideTabComponent.vue'

export default {
  components: {
    'side-tab-component': SideTabComponentVue,
    'page-layout': PageLayoutVue
  },

  name: 'GamingView'
}
</script>

<template>
  <page-layout>Gaming </page-layout>
</template>

<style></style>

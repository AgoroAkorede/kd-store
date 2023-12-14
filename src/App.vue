<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import SideTabComponentVue from './components/SideTabComponent.vue'
import HomeViewVue from './views/HomeView.vue'

export default {
  components: {
    'side-tab-component': SideTabComponentVue,
    'home-view': HomeViewVue
  }
}
</script>

<template>
  <RouterView />
</template>

<style scoped></style>

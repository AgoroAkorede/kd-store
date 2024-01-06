<template>
  <page-layout class="relative flex flex-col">
    <search-layout :search="this.search" />
  </page-layout>
</template>

<script lang="ts">
import { mapState } from 'pinia'
import PageLayoutVue from '../components/Layout/PageLayout.vue'
import SearchItemLayoutVue from '../components/Layout/SearchItemLayout.vue'
import { searchItems } from '../stores'
export default {
  name: 'SearchView',
  components: {
    'page-layout': PageLayoutVue,
    'search-layout': SearchItemLayoutVue
  },
  computed: {
    ...mapState(searchItems, ['search'])
  }
}
</script>

<style></style>

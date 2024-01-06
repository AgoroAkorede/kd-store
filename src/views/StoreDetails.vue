<template>
  <page-layout class="relative flex flex-col">
    <store-item-layout :storeItem="this.storeObj" />
  </page-layout>
</template>

<script lang="ts">
import { mapState } from 'pinia'
import { storeItems } from '../stores'
import PageLayoutVue from '../components/Layout/PageLayout.vue'
import StoreItemLayoutVue from '../components/Layout/StoreItemLayout.vue'
export default {
  name: 'StoreDetails',
  components: {
    'page-layout': PageLayoutVue,

    'store-item-layout': StoreItemLayoutVue
  },
  computed: {
    ...mapState(storeItems, ['storeObj'])
  }
}
</script>

<style></style>

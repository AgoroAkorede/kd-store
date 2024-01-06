<template>
  <div>
    <content-loader
      v-if="Objlength === 0"
      viewBox="0 0 600 460"
      :speed="2"
      primaryColor="#d1d1d1"
      secondaryColor="#efecec"
      height="100vh"
      class="px-32"
    >
      <rect x="14" y="79" rx="7" ry="7" width="160" height="300" />
      <rect x="180" y="81" rx="0" ry="0" width="320" height="30" />
      <rect x="195" y="169" rx="0" ry="0" width="38" height="30" />
      <rect x="256" y="168" rx="0" ry="0" width="38" height="30" />
      <rect x="193" y="252" rx="0" ry="0" width="260" height="6" />
      <rect x="189" y="276" rx="3" ry="3" width="90" height="34" />
      <rect x="195" y="138" rx="0" ry="0" width="47" height="8" />
      <rect x="193" y="232" rx="0" ry="0" width="260" height="6" />
    </content-loader>
    <content-loader
      v-else-if="!loaded"
      viewBox="0 0 600 460"
      :speed="2"
      primaryColor="#d1d1d1"
      secondaryColor="#efecec"
      height="100vh"
      class="px-32"
    >
      <rect x="14" y="79" rx="7" ry="7" width="160" height="300" />
      <rect x="180" y="81" rx="0" ry="0" width="320" height="30" />
      <rect x="195" y="169" rx="0" ry="0" width="38" height="30" />
      <rect x="256" y="168" rx="0" ry="0" width="38" height="30" />
      <rect x="193" y="252" rx="0" ry="0" width="260" height="6" />
      <rect x="189" y="276" rx="3" ry="3" width="90" height="34" />
      <rect x="195" y="138" rx="0" ry="0" width="47" height="8" />
      <rect x="193" y="232" rx="0" ry="0" width="260" height="6" />
    </content-loader>
    <div v-else class="h-[auto] m-3 rounded-2xl p-32 flex flex-row">
      <img class="w-[15rem] h-[25rem] rounded-xl" :src="storeItem.image" />
      <div class="h-[100%] flex flex-col justify-between mx-8">
        <h2 class="text-5xl font-semibold">{{ storeItem.name }}</h2>
        <p class="">{{ storeItem.organization }}</p>
        <div class="flex flex-row">
          <p class="text-lg font-semibold flex flex-col border-r-2 border-gray-400 px-4">
            {{ storeItem.rating }} <span class="text-sm font-normal text-gray-400">Average</span>
          </p>
          <p class="text-lg font-semibold px-4 flex flex-col">
            10k <span class="text-sm font-normal text-gray-400">Ratings</span>
          </p>
        </div>
        <article class="mb-7 mt-7 text-sm">{{ storeItem.details }}</article>

        <button class="bg-[#FA2194] h-16 mt-16 w-32">Get</button>
        <p class="text-xs">Offers in app purchases</p>
      </div>
    </div>
  </div>
  <div class="bg-[#545454] m-10 h-[60vh] rounded-lg p-5">
    <h1 class="font-semibold text-lg items-center border-b-2 border-l-gray-600">Screenshots</h1>
    <inline-carousel :items="storeItem.screenShots" />
  </div>
</template>

<script lang="ts">
import { ContentLoader } from 'vue-content-loader'
import CarouselComponentVue from '../CarouselComponent.vue'
import InlineCarouselVue from '../InlineCarousel.vue'
export default {
  name: 'StoreItemLayout',
  data() {
    return {
      loaded: false,
      Objlength: Object.keys(this.storeItem).length
    }
  },
  mounted() {
    this.setisLoaded()
  },
  props: {
    storeItem: {
      type: Object,
      default: null
    }
  },
  methods: {
    setisLoaded() {
      setTimeout(() => {
        this.loaded = true
      }, 3000)
    }
  },
  components: {
    'content-loader': ContentLoader,
    'inline-carousel': InlineCarouselVue
  }
}
</script>

<style></style>

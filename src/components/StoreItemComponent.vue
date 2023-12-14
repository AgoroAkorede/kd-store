<template>
  <div class="my-5" v-for="storeItem in StoreItemsData">
    <div
      class="text-2xl h-10 transition-transform w-[10rem] cursor-pointer p-2 rounded hover:bg-[#4b4b4b44] hover:text-[#FA2194] hover:translate-x-3 flex justify-center items-center"
    >
      {{ storeItem.namedItem }}
    </div>
    <div class="grid grid-cols-3 grid-rows-3 gap-3 p-3">
      <div
        v-for="item in storeItem.items"
        class="flex flex-row bg-[#00000059] transition-transform w-[29.5vw] h-32 p-5 rounded cursor-pointer text-sm relative hover:translate-y-[-1px] hover:shadow-card"
      >
        <img :src="item.image" class="rounded" :alt="item.id.toString" />
        <div class="flex flex-col mx-4">
          <h1 class="text-sm font-bold">{{ item.name }}</h1>
          <p>{{ item.rating }} | {{ item.type }}</p>
        </div>
        <div
          class="absolute right-4 bottom-4 h-6 bg-[#4b4b4b44] p-1 rounded w-auto flex self-center justify-center capitalize"
        >
          {{ item.isFree ? 'free' : 'owned' }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import StoreItemsData from '../data/index'
import RightInlineVue from './icons/RightInline.vue'
export default {
  name: 'StoreItemComponent',

  data() {
    return {
      StoreItemsData: StoreItemsData
    }
  },
  components: {
    'right-inline-vue': RightInlineVue
  }
}
</script>

<style></style>

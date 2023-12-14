<script lang="ts">
import IconWrapperVue from '../icons/IconWrapper.vue'
import StoreIconVue from '../icons/StoreIcon.vue'
import { searchItems } from '../../stores'
import { mapActions, mapState } from 'pinia'
export default {
  name: 'HeaderLayout',
  data() {
    return {
      query: '',
      searchModal: false
    }
  },
  components: {
    // 'icon-wrapper': IconWrapperVue,
    'store-icon': StoreIconVue
  },
  methods: {
    searchStore() {
      this.addTosearches(this.query)
      this.searchModal = true
    },
    showModal() {
      this.searchModal = !this.searchModal
    },
    remove(_: any) {
      this.removeSearch(_)
    },
    ...mapActions(searchItems, ['addTosearches', 'setSearch', 'removeSearch'])
  },
  computed: {
    ...mapState(searchItems, ['searchArray'])
  }
}
</script>

<template>
  <div class="flex flex-col relative" @click="this.searchModal === false">
    <div class="h-[10vh] w-[100%] flex justify-around items-center bg-[#545454]">
      <div class="h-[100%] flex w-auto flex-nowrap items-center">
        <store-icon />
      </div>
      <p class="uppercase">KD Store</p>
      <form @submit.prevent="searchStore">
        <input
          class="bg-[#00000059] w-[40vw] border-store-grey border-[1px] rounded-md p-2 focus:outline-none focus:border-[#FA2194] truncate"
          type="text"
          placeholder="Search apps, games, movies and more"
          v-model="this.query"
          @click="showModal"
        />
      </form>
      <div>user</div>
    </div>

    <div
      v-show="searchModal"
      class="absolute left-[37.5%] top-[10vh] z-20 h-auto rounded-b-2xl shadow-card overflow-hidden"
    >
      <div
        v-for="item in searchArray"
        :key="item.id"
        class="w-[45vw] bg-[#000000d4] flex flex-col cursor-pointer"
      >
        <div class="flex flex-row h-10 hover:bg-[#4b4b4bd4] justify-between p-3 items-center">
          <div @click="setSearch(item)" class="flex flex-row items-center w-[90%]">
            <div class="h-4 w-4 mx-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="#c2c2c2">
                <path
                  d="M30,16A13,13,0,0,1,6.54,23.72l1.61-1.19a11,11,0,1,0-1.67-9.71l1-.65,1.12,1.66-3,2A1,1,0,0,1,5,16a1,1,0,0,1-.83-.44l-2-3,1.66-1.12.68,1A13,13,0,0,1,30,16ZM16,9v7a1,1,0,0,0,.29.71l3,3,1.42-1.42L18,15.59V9Z"
                ></path>
              </svg>
            </div>
            {{ item }}
          </div>
          <div class="hover:bg-[#4b4b4bd4] focus:bg-[#4b4b4bd4] px-2 rounded" @click="remove(item)">
            ×
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

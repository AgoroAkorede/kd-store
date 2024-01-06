<template>
  <div class="flex flex-col h-auto min-h-screen w-screen">
    <div class="text-2xl pt-[10vh]">"{{ search }}"</div>
    <div class="grid grid-cols-4 w-[50%] gap-2 m-10">
      <div
        v-for="option in options"
        :key="option"
        class="flex items-center justify-center"
        @click="setButton(option)"
      >
        <button-wrapper
          :buttonProps="{
            height: '2rem',
            width: 'auto',
            extendedClass: `rounded-3xl bg-transparent  border-gray-500 border-[1px] flex items-center justify-cente capitalize flex-nowrap p-4`
          }"
          :class="{ ' text-[#FA2194]': selectedOption === option }"
          >{{ option }}</button-wrapper
        >
      </div>
    </div>
    <card-component :cardProps="filteredItems" />
  </div>
</template>

<script>
import { MAIN_STORE } from '../../data'
import { searchItems } from '../../stores'
import ButtonWrapperVue from '../ButtonWrapper.vue'
import CardComponentVue from '../CardComponent.vue'
export default {
  name: 'SearchItemLayout',
  components: {
    'card-component': CardComponentVue,
    'button-wrapper': ButtonWrapperVue
  },
  props: {
    search: String,
    default: null
  },
  methods: {
    setButton(option) {
      this.selectedOption = option
      this.$emit('optionSelected', option)
    }
  },
  data() {
    const [bestSellingGame, topFreeGame, movies] = MAIN_STORE

    const allStoreItems = [...bestSellingGame.items, ...topFreeGame.items, ...movies.items]
    return {
      allStoreItems: allStoreItems,
      options: ['all departments', 'apps', 'games', 'movies'],
      selectedOption: 'all departments'
    }
  },
  computed: {
    filteredItems() {
      if (this.selectedOption === 'apps') {
        return this.allStoreItems.filter(
          (item) =>
            item.type === 'Social' && item.name.toLowerCase().includes(this.search.toLowerCase())
        )
      } else if (this.selectedOption === 'games') {
        return this.allStoreItems.filter(
          (item) =>
            item.type === 'Gaming' && item.name.toLowerCase().includes(this.search.toLowerCase())
        )
      } else if (this.selectedOption === 'movies') {
        return this.allStoreItems.filter(
          (item) =>
            item.type === 'Movies' && item.name.toLowerCase().includes(this.search.toLowerCase())
        )
      }
      return this.allStoreItems.filter((item) =>
        item.name.toLowerCase().includes(this.search.toLowerCase())
      )
    }
  }
}
</script>

<style></style>

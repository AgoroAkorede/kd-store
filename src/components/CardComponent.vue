<template>
  <div
    class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 w-[95%] items-center justify-center px-10 flex-wrap"
  >
    <div
      v-for="(card, index) in cardProps"
      :key="index"
      class="lg:w-[29vw] h-[24rem] rounded-2xl cursor-pointer flex flex-col hover:shadow-card relative bg-[#545454]"
      @click="compFunc(index)"
      @mouseover="setHovered(index)"
    >
      <div class="p-4">
        <div class="flex flex-row items-center">
          <img
            class="rounded-md self-start w-8 h-12"
            :src="card.image"
            :alt="'Image ' + (index + 1)"
          />
          <div class="flex flex-col ml-3">
            <h2 class="leading-tight flex-wrap text-sm font-bold line-clamp-2">
              {{ card.name }}
            </h2>
            <div class="flex flex-row justify-between font-light text-xs">
              <div>{{ card.rating }} | {{ card.type }} | {{ card.detailedType }}</div>
              <div
                class="h-5 bg-[#3e3e3e] p-1 rounded w-auto flex text-xs items-center justify-center capitalize ml-3"
                :style="{
                  backgroundColor: card.isFree === true ? '#3e3e3e' : 'yellow',
                  color: card.isFree === true ? 'white' : 'black'
                }"
              >
                {{ card.isFree === true ? 'free' : `$${card.isFree}` }}
              </div>
            </div>
          </div>
        </div>
        <article class="leading-tight text-xs my-6 flex-wrap line-clamp-2">
          {{ card.details }}
        </article>
        <img
          :src="card.imageSecondary"
          class="lg:h-[60%] rounded-sm w-[100%] sm:h-[60%] xs:h-[50%]"
        />
        <div
          class="p-3 absolute bottom-0 w-[100%] h-[5rem] flex flex-col justify-between z-20"
        ></div>
      </div>
      <div
        v-if="hovered === index"
        class="lg:w-[30vw] w-[80vw] sm:w-[45vw] z-30 rounded-xl overflow-hidden absolute shadow-card bg-[#212124] origin-top-left delay-[2s] animate-scale-enter h-[24rem]"
        @mouseout="resetCardHovered()"
      >
        <img :src="card.imageSecondary" class="h-[60%] w-[100%]" />
        <div class="flex flex-col p-3 text-gray-300">
          <h2 class="font-bold text-xl">{{ card.name }}</h2>
          <p>{{ card.organization }} | {{ card.rating }} | {{ card.detailedType }}</p>
          <p class="text-xs">{{ card.isFree === true ? 'Free' : `$${card.isFree}` }}</p>
          <p class="leading-tight text-xs italic my-6 flex-wrap line-clamp-2">
            {{ card.details }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'pinia'
import { storeItems } from '../stores'
export default {
  name: 'CardComponent',
  data() {
    return {
      hovered: null,
      isScaling: false,
      imageLoaded: false,
      breakpoints: {
        verysmall: 480,
        small: 640,
        medium: 800,
        semilarge: 920,
        large: 1024,
        xlarge: 1280
        // Add more breakpoints as needed
      }
    }
  },

  props: {
    cardProps: {
      type: Object,
      required: true
    }
  },
  methods: {
    setHovered(index) {
      this.hovered = index
      this.animateScale()
    },
    isScreenSize(size) {
      // Check if the window width is less than the specified breakpoint
      return window.innerWidth < this.breakpoints[size]
    },
    getVisibleItems(array) {
      // Return a subset of array based on screen size
      if (this.isScreenSize('small')) {
        return array.slice(0, 2)
      } else if (this.isScreenSize('verysmall')) {
        return array.slice(0, 1)
      } else if (this.isScreenSize('medium')) {
        return array.slice(0, 3)
      } else if (this.isScreenSize('semilarge')) {
        return array.slice(0, 4)
      } else {
        return array
      }
    },
    handleResize() {
      this.$forceUpdate()
    },
    compFunc(index) {
      this.addToStoreItems(this.cardProps.items[index])
      this.$router.push({ name: 'StoreDetails', params: this.storeObj })
    },
    animateScale() {
      this.isScaling = true
      setTimeout(() => {
        this.isScaling = false
      }, 3000)
    },
    resetCardHovered() {
      this.hovered = null
    },
    ...mapActions(storeItems, ['addToStoreItems'])
  }
}
</script>

<style></style>

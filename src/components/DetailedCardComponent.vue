<template>
  <div class="flex flex-col transition-transform px-10">
    <div
      class="text-xl font-semibold w-auto max-w-[15rem] h-10 transition-transform cursor-pointer p-2 m-4 rounded hover:bg-[#4b4b4b44] hover:text-[#FA2194] hover:translate-x-3 flex justify-left items-center"
    >
      {{ cardProps.namedItem }}
    </div>

    <div class="grid lg:grid-cols-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 space-x-4 mb-5">
      <div v-show="hasAds" class="lg:w-[30vw] bg-slate-700 rounded-lg"></div>

      <div
        v-for="(card, index) in getVisibleItems(cardProps.items)"
        :key="index"
        class="lg:min-w-[14vw] rounded-2xl cursor-pointer flex flex-col hover:shadow-card relative"
        :class="{ 'bg-transparent': hovered }"
        :style="{ height: height }"
        @click="compFunc(index)"
      >
        <div class="overflow-hidden">
          <div class="flex justify-center items-center" @mouseover="setHovered(index)">
            <img
              class="rounded-lg object-fill self-center w-[100%]"
              :src="card.image"
              :alt="'Image ' + (index + 1)"
              :style="{ height: getComponentHeight }"
            />
          </div>
          <div
            class="absolute bottom-0 z-10 left-0 w-full h-[20%] bg-cover filter blur-md"
            :style="{ clipPath: clipPathStyle }"
          ></div>
          <div class="p-3 absolute bottom-0 w-[100%] h-[5rem] flex flex-col justify-between z-20">
            <h2 class="leading-tight flex-wrap text-sm font-bold line-clamp-2">
              {{ card.name }}
            </h2>
            <div class="flex flex-row justify-between">
              <div>{{ card.rating }}</div>
              <div
                class="h-5 bg-[#00000065] p-1.5 rounded w-auto flex text-xs items-center justify-center capitalize"
              >
                {{ card.isFree === true ? 'free' : `$${card.isFree}` }}
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="hovered === index"
          class="lg:w-[30vw] w-[80vw] sm:w-[45vw] z-30 rounded-xl overflow-hidden absolute shadow-card bg-[#212124] origin-top-left delay-[2s] animate-scale-enter pb-5"
          @mouseout="resetCardHovered()"
          :style="{ height: `${height + 6}rem` }"
          :class="{
            'translate-x-[0rem]': index === 0 && !hasAds,
            'translate-x-[-13.5rem]': index === cardLength - 1
          }"
        >
          <img :src="card.imageSecondary" class="h-[60%] w-[100%]" />
          <div class="flex flex-col p-3 text-gray-300">
            <h2 class="font-bold text-lg">{{ card.name }}</h2>
            <p>{{ card.organization }} | {{ card.rating }} | {{ card.detailedType }}</p>
            <p class="text-xs">{{ card.isFree === true ? 'Free' : `$${card.isFree}` }}</p>
            <p class="leading-tight text-xs italic my-6 flex-wrap line-clamp-2">
              {{ card.details }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapActions, mapState } from 'pinia'
import { storeItems } from '../stores'
export default {
  name: 'DetailedCardComponent',
  props: {
    cardProps: {
      type: Object,
      required: true
    },
    height: {
      type: Number,
      default: null
    },
    hasAds: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      hovered: null,
      clipPathStyle: 'initial',
      isScaling: false,
      imageLoaded: false,
      loadedImages: new Array(this.cardProps.items.length).fill(false),
      cardLength: this.cardProps.items.length,
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
  watch: {
    $route() {
      this.handleResize()
    }
  },
  mounted() {
    // Update isMediumScreen on window resize
    window.addEventListener('resize', this.handleResize)
    this.updateClipPath()
  },
  beforeUnmount() {
    // Remove the event listener when the component is destroyed
    window.removeEventListener('resize', this.handleResize)
  },
  computed: {
    getComponentHeight() {
      // Determine component height based on screen size
      if (this.isScreenSize('small')) {
        return '12rem' // Adjust height for small screens
      } else {
        return `${this.height}rem`
      }
    },
    ...mapState(storeItems, ['storeObj'])
  },
  methods: {
    updateClipPath() {
      // Calculate the clip path dynamically based on your requirements
      // This is just a sample, you may need to adjust it based on your image and design
      this.clipPathStyle = 'polygon(0 0, 100% 0, 100% 70%, 0 100%)'
    },
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
      // Update computed properties on window resize
      // This method can be attached to the window resize event
      this.$forceUpdate()
    },
    compFunc(index) {
      // console.log(index)
      this.addToStoreItems(this.cardProps.items[index])
      this.$router.push({ name: 'StoreDetails', params: this.storeObj })
    },
    animateScale() {
      this.isScaling = true
      setTimeout(() => {
        this.isScaling = false
      }, 3000)
    },
    // onImageLoad(index) {
    //   console.log('images loaded')
    //   // this.$set(this.loadedImages, index, true)
    //   this.loadedImages.fill(true)
    // },
    // onImageError(index) {
    //   console.error(`Image ${index + 1} failed to load`)
    // },
    resetCardHovered() {
      this.hovered = null
    },
    ...mapActions(storeItems, ['addToStoreItems'])
  }
}
</script>

<style></style>

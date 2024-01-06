<template>
  <!-- <div v-if="loading"></div> -->
  <div class="h-[75%] relative overflow-hidden mt-[5rem]">
    <div class="overflow-x-hidden m-5 flex space-x-1 flex-row">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="my-10 transition duration-5000"
        ref="imageContainer"
        :style="{ transform: `translateX(${translateValue}vw)` }"
        @click="stopMovement"
        @mouseover="setHovered(true)"
        @mouseout="setHovered(false)"
      >
        <div
          class="transition duration-5000 flex-1 h-[28.5rem] w-full min-w-[60vw] flex-row flex"
          v-if="index % 2 === 0"
          :class="{ 'animate-reducing-width': newSlideReached }"
        >
          <animation-timer class="absolute left-20 bottom-8" :duration="this.timerDuration" />
          <div class="flex flex-col text-white absolute left-20 top-[30%] z-10">
            <div class="bg-[#616470b7] p-1 rounded-lg w-16">
              {{ ConvertToDollars(item.pricing) }}
            </div>
            <h1 class="font-bold text-4xl">{{ item.header }}</h1>
            <h3 class="text-sm">{{ item.text }}</h3>
          </div>
          <button-wrapper
            :buttonProps="{
              height: '2rem',
              width: 'auto',
              buttonFunc: () => seeDetails(this),
              extendedClass: `absolute left-20 top-[70%] bg-[${item.color}] rounded-xl p-4 flex flex-row flex-nowrap justify-center items-center text-[0.75rem] z-10 shadow-button`
            }"
            :style="{ backgroundColor: `${item.color}` }"
          >
            <div class="h-4 w-4 flex-row">
              <right-inline-vue />
            </div>
            See Details
          </button-wrapper>
          <img
            class="h-full w-full object-cover rounded-lg"
            :class="{ 'animate-reducing-width': newSlideReached }"
            :src="item.src"
            v-if="!item.isVideo"
            :alt="item.alt"
          />

          <video ref="myVideo" @loadedmetadata="handleMetadata" v-else loop muted>
            <source :src="item.src" type="video/mp4" />
          </video>
        </div>

        <div
          class="transition duration-5000 flex-1 h-[28.5rem] w-full min-w-[22.5vw] flex-row flex"
          v-else
        >
          <img
            class="h-full w-full object-cover rounded-lg"
            :src="item.src"
            v-if="!item.isVideo"
            :alt="item.alt"
          />

          <video ref="video" class="rounded-lg" v-else loop autoplay muted>
            <source :src="item.src" type="video/mp4" />
          </video>
        </div>
        <div
          class="w-full h-[25rem] top-0 absolute opacity-30"
          :style="{ backgroundColor: item.color, filter: ' blur(30px) brightness(70%)' }"
          v-if="index % 2 === 0"
        ></div>
        <div
          class="w-full h-[25rem] top-0 absolute opacity-30"
          :style="{ backgroundColor: item.color, filter: ' blur(30px) brightness(70%)' }"
        ></div>
      </div>
    </div>

    <button-wrapper
      :buttonProps="{
        height: '2rem',
        width: '2rem',
        buttonFunc: leftClick,
        extendedClass: `left-1 absolute top-[50%] ${hovered ? 'opacity-100' : 'opacity-0'}`
      }"
      @mouseover="setHovered(true)"
      @mouseout="setHovered(false)"
    >
      <left-icon />
    </button-wrapper>

    <button-wrapper
      :buttonProps="{
        height: '2rem',
        width: '2rem',
        buttonFunc: rightClick,
        extendedClass: `right-2 absolute top-[50%] ${hovered ? 'opacity-100' : 'opacity-0'}`
      }"
      @mouseover="setHovered(true)"
      @mouseout="setHovered(false)"
    >
      <right-icon />
    </button-wrapper>
  </div>
</template>

<script>
// import { type PropType } from 'vue'
// import { type Item } from '../types/index'
// import ConvertToDollars from '../utils/functions'
import RightIconVue from './icons/RightIcon.vue'
import IconWrapperVue from './icons/IconWrapper.vue'
import ButtonWrapperVue from './ButtonWrapper.vue'
import LeftIIconVue from './icons/LeftIIcon.vue'
import { ref, onMounted } from 'vue'
import AnimationTimerComponentVue from './AnimationTimerComponent.vue'
import RightInlineVue from './icons/RightInline.vue'

export default {
  name: 'CarouselComponent',
  components: {
    // 'icon-wrapper': IconWrapperVue,
    'right-icon': RightIconVue,
    'left-icon': LeftIIconVue,
    'button-wrapper': ButtonWrapperVue,
    'right-inline-vue': RightInlineVue,
    'animation-timer': AnimationTimerComponentVue
  },

  data() {
    return {
      current: 0,
      translateValue: 0,
      intervalId: null,
      timerDuration: 5000,
      newSlideReached: true,
      videoDuration: 0,
      slideIsVideo: false,
      loading: true,
      imagesLoaded: 0,
      hovered: false
    }
  },

  props: {
    items: {
      type: Array,
      required: true
    }
  },

  created() {
    this.startTimer()
  },
  beforeUnmount() {
    this.stopTimer()
  },
  mounted() {
    this.checkImagesLoaded()
  },
  computed: {},
  methods: {
    handleMetadata() {
      const video = this.$refs.myVideo
      this.videoDuration = video[0].duration
    },
    ConvertToDollars(price) {
      return `$${price}.00`
    },

    startTimer() {
      if (this.timerDuration === 5000) {
        this.intervalId = setInterval(this.rightClick, this.timerDuration)
      }
    },

    resetTimer() {
      // Set up the timer to change images at regular intervals
      this.intervalId = setInterval(this.leftClick, this.timerDuration)
    },

    stopTimer() {
      // Clear the interval to stop the timer
      clearInterval(this.intervalId)
      this.videoDuration = 0
    },
    stopMovement() {
      if (this.timerDuration !== 0) {
        this.stopTimer()
        this.timerDuration = 0
      } else {
        this.timerDuration = 5000
        this.startTimer()
      }
    },
    setHovered(value) {
      this.hovered = value
    },
    leftClick() {
      if (this.current > 0) {
        this.current = (this.current - 1 + this.items.length) % this.items.length
      }
      this.updateTranslateValue()
    },
    seeDetails(button) {
      console.log(button)
    },
    rightClick() {
      // if (this.current < this.items.length - 1) {
      this.current = (this.current + 1) % this.items.length
      // }
      this.updateTranslateValue()
    },
    updateTranslateValue() {
      this.translateValue = -this.current * 40
    },
    checkImagesLoaded() {
      const images = document.querySelectorAll('img')
      const totalImages = images.length
      console.log(totalImages)

      images.forEach((image) => {
        image.addEventListener('load', () => {
          this.imagesLoaded++
          if (this.imagesLoaded === totalImages) {
            // All images have loaded
            this.loading = false
          }
        })
      })
    }
  },
  watch: {
    current(newIndex, oldIndex) {
      const video = this.$refs.myVideo
      if (newIndex === 6) {
        this.slideIsVideo = true
        video[0].play()
        this.timerDuration = this.videoDuration * 1000
      } else {
        this.slideIsVideo = false
        this.timerDuration = 5000
        const elementType = this.$refs.imageContainer[0]
        // console.log(elementType)

        video[0].pause()
        video[0].currentTime = 0
      }

      if (newIndex !== oldIndex) {
        // There is a NEW slide
        this.newSlideReached = !this.newSlideReached
      }
    }
  }
}
</script>

<style scoped></style>
